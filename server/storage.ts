import { type User, type InsertUser, type Contact, type InsertContact, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Blog functionality
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    
    // Initialize with sample blog posts
    this.initializeSamplePosts();
  }

  private initializeSamplePosts() {
    const samplePosts: BlogPost[] = [
      {
        id: "1",
        title: "The Art of Storytelling in Digital Content",
        slug: "art-of-storytelling-digital-content",
        excerpt: "Exploring how traditional storytelling techniques can transform modern digital content creation and audience engagement.",
        content: `# The Art of Storytelling in Digital Content

In today's digital landscape, content creation has become more than just sharing information—it's about crafting narratives that resonate with audiences across platforms.

## Why Stories Matter

Stories have been humanity's primary method of communication for millennia. They help us:

- **Connect emotionally** with our audience
- **Simplify complex ideas** through relatable examples
- **Create memorable experiences** that last beyond the initial interaction
- **Build trust** through authentic narratives

## Digital Storytelling Techniques

### 1. The Hook
Every great digital story starts with a compelling opening that captures attention within the first few seconds.

### 2. Structure Matters
Whether it's a social media post or a long-form article, structure guides your reader through the narrative journey.

### 3. Visual Elements
In digital storytelling, visuals aren't just decoration—they're integral to the narrative flow.

## Conclusion

The future of content creation lies in understanding that we're not just creators—we're storytellers. Every piece of content is an opportunity to connect, inspire, and engage through the timeless art of narrative.`,
        published: true,
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-15"),
        tags: ["storytelling", "content-creation", "digital-media"],
        readTime: "5 min read"
      },
      {
        id: "2",
        title: "Building Authentic Brand Voices Through Copy",
        slug: "authentic-brand-voices-copywriting",
        excerpt: "How strategic copywriting can help brands develop genuine, consistent voices that resonate with their target audiences.",
        content: `# Building Authentic Brand Voices Through Copy

Brand voice isn't just about what you say—it's about how you say it, when you say it, and why your audience should listen.

## What Makes a Brand Voice Authentic?

Authenticity in brand voice comes from alignment between:

- **Values and messaging**
- **Audience needs and brand offerings**
- **Consistent tone across all touchpoints**
- **Human connection over corporate speak**

## The Copywriting Process

### Discovery Phase
Understanding the brand's core identity, values, and audience is crucial before writing a single word.

### Voice Development
Creating guidelines that define:
- Tone of voice
- Key phrases and vocabulary
- What to avoid
- Examples across different contexts

### Implementation
Ensuring consistency across:
- Website copy
- Social media content
- Email campaigns
- Marketing materials

## Measuring Success

Authentic brand voice success can be measured through:
- Audience engagement rates
- Brand recognition metrics
- Customer feedback
- Content performance analytics

The goal is creating a voice so distinctive and authentic that your audience recognizes your brand even without seeing your logo.`,
        published: true,
        createdAt: new Date("2024-01-20"),
        updatedAt: new Date("2024-01-20"),
        tags: ["copywriting", "brand-voice", "marketing"],
        readTime: "4 min read"
      },
      {
        id: "3",
        title: "The Power of Personal Essays in Professional Growth",
        slug: "personal-essays-professional-growth",
        excerpt: "How writing personal essays can enhance your professional development and create deeper connections with your audience.",
        content: `# The Power of Personal Essays in Professional Growth

Personal essays bridge the gap between professional expertise and human experience, creating content that both informs and inspires.

## Why Personal Essays Matter

In a world saturated with generic content, personal essays offer:

### Authenticity
Sharing genuine experiences builds trust with your audience.

### Relatability
Personal stories help readers see themselves in your journey.

### Expertise with Heart
Technical knowledge combined with personal insight creates compelling content.

## Crafting Effective Personal Essays

### Start with Truth
The most powerful essays begin with honest self-reflection.

### Find Universal Themes
Personal experiences that touch on universal human emotions create broader connections.

### Balance Vulnerability and Professionalism
Share enough to be relatable without oversharing.

## Professional Benefits

Writing personal essays can:
- Establish thought leadership
- Build personal brand
- Create emotional connections with clients
- Demonstrate communication skills
- Showcase problem-solving abilities

Personal essays aren't just writing exercises—they're powerful tools for professional growth and audience connection.`,
        published: true,
        createdAt: new Date("2024-01-25"),
        updatedAt: new Date("2024-01-25"),
        tags: ["personal-essays", "writing", "professional-development"],
        readTime: "3 min read"
      }
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  // Blog methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;
    
    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date()
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
