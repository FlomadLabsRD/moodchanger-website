# Strapi CMS Integration Guide

This guide explains how to use Strapi CMS with the MoodChanger website.

## 🏗️ Project Structure

```
moodchanger-website/
├── app/                 # Next.js 15 app (frontend)
├── cms/                 # Strapi CMS (backend)
├── lib/
│   └── strapi.ts       # Strapi API utilities
├── .env.local          # Next.js environment variables
└── README.md
```

## 🚀 Getting Started

### 1. Start Strapi CMS (Backend)

First, start the Strapi development server:

```bash
cd cms
pnpm run develop
```

This will:
- Start Strapi on `http://localhost:1337`
- Open the admin panel at `http://localhost:1337/admin`
- Create an admin account on first run

### 2. Create Your Admin Account

On first run, you'll be prompted to create an admin account:
1. Fill in your details
2. Click "Let's start"

### 3. Configure API Permissions

To allow Next.js to fetch data from Strapi:

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Enable the following permissions for your content types:
   - **Feature**: `find`, `findOne`
   - **Use-case**: `find`, `findOne`
   - **Sub-category**: `find`, `findOne`
   - **Home-page**: `find`
3. Click **Save**

### 4. Add Sample Content

Create some sample content in Strapi:

#### Create Use Cases:
1. Go to **Content Manager** → **Use Case**
2. Create entries for:
   - **People** (slug: `people`)
   - **Athletes** (slug: `athletes`)
   - **Pets** (slug: `pets`)

#### Create Features:
1. Go to **Content Manager** → **Feature**
2. Add features and associate them with use cases

#### Create Home Page Content:
1. Go to **Content Manager** → **Home Page** (Single Type)
2. Fill in the hero title, subtitle, and other fields
3. Publish the content

### 5. Start Next.js (Frontend)

In a new terminal:

```bash
# From the project root
pnpm run dev
```

Next.js will start on `http://localhost:3000`

## 📝 Content Types

### Home Page (Single Type)
- `hero_title`: Main headline
- `hero_subtitle`: Subheading text
- `canva_embed_url`: Canva presentation URL
- `challenge_title`: Challenge section title
- `challenge_subtitle`: Challenge section description
- `solution_title`: Solution section title
- `solution_subtitle`: Solution section description
- `how_it_works_title`: How it works section title

### Use Case (Collection Type)
- `name`: Category name (e.g., "People", "Athletes", "Pets")
- `slug`: URL-friendly identifier
- `title`: Display title
- `description`: Short description
- `hero_title`: Page hero title
- `hero_description`: Page hero description
- `icon`: Icon type (user, lightning, paw)
- Relations:
  - `features`: Associated feature cards
  - `sub_categories`: Child categories (e.g., Allergies, Stuttering)

### Feature (Collection Type)
- `title`: Feature title
- `description`: Feature description
- `icon`: Icon name (lightning, user, notification, etc.)
- `order`: Display order (0 = first)
- Relation:
  - `category`: Parent use case

### Sub Category (Collection Type)
- `name`: Sub-category name
- `slug`: URL-friendly identifier
- `title`: Display title
- `description`: Short description
- `icon`: Icon identifier
- `content`: Rich text content
- Relation:
  - `parent_use_case`: Parent use case

## 🔌 Using Strapi Data in Next.js

### Importing the Strapi Utilities

```typescript
import { getHomePage, getUseCases, getUseCaseBySlug } from '@/lib/strapi';
```

### Example: Fetch Home Page Data

```typescript
// In a Server Component
export default async function HomePage() {
  const homeData = await getHomePage();
  
  return (
    <div>
      <h1>{homeData?.attributes.hero_title}</h1>
      <p>{homeData?.attributes.hero_subtitle}</p>
    </div>
  );
}
```

### Example: Fetch Use Cases

```typescript
export default async function UseCasesPage() {
  const useCases = await getUseCases();
  
  return (
    <div>
      {useCases.map((useCase) => (
        <div key={useCase.id}>
          <h2>{useCase.attributes.title}</h2>
          <p>{useCase.attributes.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Example: Fetch Single Use Case by Slug

```typescript
export default async function UseCasePage({ params }: { params: { slug: string } }) {
  const useCase = await getUseCaseBySlug(params.slug);
  
  if (!useCase) {
    return <div>Not found</div>;
  }
  
  return (
    <div>
      <h1>{useCase.attributes.title}</h1>
      <p>{useCase.attributes.description}</p>
    </div>
  );
}
```

## 🔐 API Token (Optional)

For production or if you want to use a secure API token:

1. Go to **Settings** → **API Tokens** → **Create new API Token**
2. Name it (e.g., "Next.js Frontend")
3. Token type: **Read-only**
4. Token duration: **Unlimited** or set an expiration
5. Copy the generated token
6. Add it to `.env.local`:

```bash
STRAPI_API_TOKEN=your-token-here
```

## 🎨 Available Helper Functions

All functions are in `/lib/strapi.ts`:

- `getHomePage()` - Fetch home page content
- `getUseCases()` - Fetch all use cases
- `getUseCaseBySlug(slug)` - Fetch single use case
- `getSubCategoryBySlug(slug)` - Fetch single sub-category
- `getFeatures()` - Fetch all features
- `getFeaturesByCategory(categoryId)` - Fetch features for a category

## 🚢 Deployment

### Deploying Strapi

Strapi can be deployed to:
- **Strapi Cloud** (easiest)
- **Heroku**
- **AWS**
- **DigitalOcean**
- **Railway**
- Any VPS with Node.js support

See [Strapi Deployment Guide](https://docs.strapi.io/dev-docs/deployment)

### Deploying Next.js

Update `.env.local` (or Vercel environment variables) to point to your production Strapi URL:

```bash
NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-instance.com/api
```

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi + Next.js Guide](https://docs.strapi.io/dev-docs/integrations/next-js)
- [Next.js Documentation](https://nextjs.org/docs)

## 🛠️ Development Workflow

1. **Start both services**:
   ```bash
   # Terminal 1 - Strapi
   cd cms && pnpm run develop
   
   # Terminal 2 - Next.js
   pnpm run dev
   ```

2. **Add/modify content in Strapi** at `http://localhost:1337/admin`

3. **Content automatically available in Next.js** - just refresh your browser

4. **No rebuild needed** - Next.js fetches data on each request in development

## 🔄 Next Steps

1. ✅ Strapi CMS is set up in `/cms`
2. ✅ Content types are configured
3. ✅ API utilities are ready in `/lib/strapi.ts`
4. ⏭️ Add sample content in Strapi admin
5. ⏭️ Update Next.js pages to fetch from Strapi
6. ⏭️ Configure API permissions
7. ⏭️ Test the integration
8. ⏭️ Deploy to production

## 💡 Tips

- **Always publish content** - Draft content won't appear in the API
- **Use the populate parameter** - Strapi doesn't populate relations by default
- **Cache in production** - Use Next.js caching strategies for better performance
- **Backup your database** - The SQLite database is in `cms/.tmp/data.db`

---

Need help? Check the [Strapi Discord](https://discord.strapi.io/) or [Next.js Discussions](https://github.com/vercel/next.js/discussions)
