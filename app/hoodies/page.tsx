import ProductGallery from '../components/ProductGallery';

// Product data for hoodies
const hoodies = [
  {
    id: 'hoodie1',
    name: 'Premium Hoodie 1',
    nameAr: 'سترة عالية الجودة 1',
    description: 'Ultra-soft hoodie with perfect fit. Made from premium cotton blend for maximum comfort.',
    descriptionAr: 'سترة ناعمة جداً بقصة مثالية. مصنوعة من مزيج قطن عالي الجودة لأقصى راحة.',
    price: 69.99,
    image: '/hoodies/hoodie1.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'hoodie2',
    name: 'Premium Hoodie 2',
    nameAr: 'سترة عالية الجودة 2',
    description: 'Cozy and stylish hoodie perfect for cool weather. Features modern design with comfort in mind.',
    descriptionAr: 'سترة دافئة وأنيقة مثالية للطقس البارد. تتميز بتصميم عصري يركز على الراحة.',
    price: 74.99,
    image: '/hoodies/hoodie2.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'hoodie3',
    name: 'Premium Hoodie 3',
    nameAr: 'سترة عالية الجودة 3',
    description: 'Classic hoodie with contemporary twist. Versatile piece for any casual outfit.',
    descriptionAr: 'سترة كلاسيكية مع لمسة عصرية. قطعة متعددة الاستخدامات لأي زي كاجوال.',
    price: 69.99,
    image: '/hoodies/hoodie3.jpg',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 'hoodie4',
    name: 'Premium Hoodie 4',
    nameAr: 'سترة عالية الجودة 4',
    description: 'Durable hoodie built for everyday wear. Premium materials ensure long-lasting quality.',
    descriptionAr: 'سترة متينة مصنوعة للارتداء اليومي. المواد عالية الجودة تضمن جودة طويلة الأمد.',
    price: 79.99,
    image: '/hoodies/hoodie4.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'hoodie5',
    name: 'Premium Hoodie 5',
    nameAr: 'سترة عالية الجودة 5',
    description: 'Sleek design meets ultimate comfort. Perfect hoodie for your active lifestyle.',
    descriptionAr: 'تصميم أنيق يلتقي بالراحة المثالية. سترة مثالية لنمط حياتك النشط.',
    price: 72.99,
    image: '/hoodies/hoodie5.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'hoodie6',
    name: 'Premium Hoodie 6',
    nameAr: 'سترة عالية الجودة 6',
    description: 'Limited edition hoodie with unique design. Stand out from the crowd with this exclusive piece.',
    descriptionAr: 'سترة إصدار محدود بتصميم فريد. تميز عن الآخرين بهذه القطعة الحصرية.',
    price: 84.99,
    image: '/hoodies/hoodie6.jpg',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'hoodie7',
    name: 'Premium Hoodie 7',
    nameAr: 'سترة عالية الجودة 7',
    description: 'Elite quality hoodie with exceptional craftsmanship. A must-have for your collection.',
    descriptionAr: 'سترة بجودة نخبوية مع حرفية استثنائية. قطعة أساسية لمجموعتك.',
    price: 89.99,
    image: '/hoodies/hoodie7.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

export default function HoodiesPage() {
  return (
    <ProductGallery
      products={hoodies}
      title="Hoodies"
      titleAr="السترات"
    />
  );
}
