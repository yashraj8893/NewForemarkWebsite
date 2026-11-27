import type { BlogPost } from '../../data/blogPosts';

const articlePhotos: Record<string, { src: string; alt: string }> = {
  '1': {
    src: '/blog-images/software-developer.jpg',
    alt: 'Software developer working on code at a laptop',
  },
  '2': {
    src: '/blog-images/product-designer.jpg',
    alt: 'Designer working with a drawing tablet and laptop',
  },
  '3': {
    src: '/blog-images/data-center.jpg',
    alt: 'Rows of equipment and cabling in a data center',
  },
  '4': {
    src: '/blog-images/leather-craft.jpg',
    alt: 'Handcrafted leather wallets arranged on a wooden work surface',
  },
  '5': {
    src: '/blog-images/server-racks.jpg',
    alt: 'Server racks and network cables in a data center',
  },
  '6': {
    src: '/blog-images/teamwork.jpg',
    alt: 'Colleagues collaborating around a laptop',
  },
  '7': {
    src: '/blog-images/online-shopping.jpg',
    alt: 'Customer making an online purchase on a laptop',
  },
  '8': {
    src: '/blog-images/code-workspace.jpg',
    alt: 'Developer coding at a desk with a laptop and monitor',
  },
};

/** Real editorial photography matched to each article topic. */
export function EditorialArtwork({ post }: { post: BlogPost }) {
  const photo = articlePhotos[post.id];

  if (!photo) return null;

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      className="editorial-artwork"
      loading={post.featured ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
