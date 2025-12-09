import ProductGallery from '../components/ProductGallery';
import { useLanguage } from '../contexts/LanguageContext';

// Product data for bundles
const bundles = [
  {
    id: 'bundle1',
    name: 'Complete Outfit Bundle 1',
    nameAr: 'باقة الملابس الكاملة 1',
    description: 'A complete outfit bundle featuring premium quality hoodie and pants. Perfect for casual wear with style and comfort.',
    descriptionAr: 'باقة ملابس كاملة تتميز بسترة وبنطلون عالي الجودة. مثالية للملابس الكاجوال مع الأناقة والراحة.',
    price: 149.99,
    image: '/bundles/budle1.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'bundle2',
    name: 'Complete Outfit Bundle 2',
    nameAr: 'باقة الملابس الكاملة 2',
    description: 'Stylish bundle combining comfort and modern design. Includes matching hoodie and pants set.',
    descriptionAr: 'باقة أنيقة تجمع بين الراحة والتصميم العصري. تتضمن مجموعة سترة وبنطلون متطابقة.',
    price: 159.99,
    image: '/bundles/bundle2.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'bundle3',
    name: 'Complete Outfit Bundle 3',
    nameAr: 'باقة الملابس الكاملة 3',
    description: 'Premium bundle with exceptional quality. Perfect combination for your everyday style.',
    descriptionAr: 'باقة عالية الجودة بجودة استثنائية. مزيج مثالي لأسلوبك اليومي.',
    price: 169.99,
    image: '/bundles/bundle3.jpg',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'bundle4',
    name: 'Complete Outfit Bundle 4',
    nameAr: 'باقة الملابس الكاملة 4',
    description: 'Limited edition bundle featuring exclusive designs. Stand out with this unique collection.',
    descriptionAr: 'باقة إصدار محدود تتميز بتصاميم حصرية. تميز بهذه المجموعة الفريدة.',
    price: 179.99,
    image: '/bundles/bundle4.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'bundle5',
    name: 'Complete Outfit Bundle 5',
    nameAr: 'باقة الملابس الكاملة 5',
    description: 'Ultimate comfort bundle. Premium materials and perfect fit for all occasions.',
    descriptionAr: 'باقة الراحة المثالية. مواد عالية الجودة وقصة مثالية لجميع المناسبات.',
    price: 189.99,
    image: '/bundles/bundle5.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

export default function BundlesPage() {
  return (
    <ProductGallery
      products={bundles}
      title="Bundles"
      titleAr="الباقات"
    />
  );
}
