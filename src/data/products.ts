import { Product } from '../types/product';

// Static asset references from generated high-fidelity campaign assets
import pureMultaniImg from '../assets/images/product_multani_pure_1791042477622.jpg';
import multaniRoseImg from '../assets/images/product_multani_rose_1791042493887.jpg';
import multaniHaldiImg from '../assets/images/product_multani_haldi_1791042507756.jpg';
import multaniNeemImg from '../assets/images/product_multani_neem_1791042522712.jpg';
import multaniSandalwoodImg from '../assets/images/product_multani_sandalwood_1791042535537.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'pure-multani-mitti',
    slug: 'pure-multani-mitti-powder',
    name: 'Pure Multani Mitti Powder',
    subtitle: 'The Foundation',
    description:
      'Pure Multani Mitti, traditionally valued for its naturally cleansing and refreshing character.',
    longDescription:
      'Formed over centuries in mineral-rich natural clay beds, this clay is sun-cured and fine-milled to create an exceptionally smooth, earthy texture. Free from synthetic additives, perfumes, and fillers.',
    image: pureMultaniImg,
    status: 'Launching Soon',
    ingredients: ['100% Pure Multani Mitti (Fuller’s Earth)'],
    weight: '200g net wt.',
    packagingNote: 'Recyclable kraft paper cylinder with airtight inner botanical liner',
    ritualGuide: 'Blend with clean lukewarm water or floral hydrosol into a smooth paste. Apply mindfully, resting as it dries naturally before gently rinsing with warm water.',
    shopifyHandle: 'pure-multani-mitti-powder',
    shopifyProductId: '',
  },
  {
    id: 'multani-rose-water',
    slug: 'multani-rose-water',
    name: 'Multani + Rose Water',
    subtitle: 'The Gentle Harmony',
    description:
      'A gentle blend inspired by the timeless pairing of mineral-rich earth and the softness of rose.',
    longDescription:
      'A classic pairing rooted in Indian households. Natural Multani Mitti is paired with fragrant, shade-dried indigenous rose petal essence, evoking the cool freshness of morning gardens.',
    image: multaniRoseImg,
    status: 'Launching Soon',
    ingredients: ['Multani Mitti (Fuller’s Earth)', 'Rosa Damascena (Rose Petal Powder & Essence)'],
    weight: '150g net wt.',
    packagingNote: 'Frosted recyclable vessel with natural wooden cap',
    ritualGuide: 'Mix with pure water or rose mist to awaken the subtle floral aroma. Allow the cooling paste to settle on skin for a quiet personal moment.',
    shopifyHandle: 'multani-rose-water',
    shopifyProductId: '',
  },
  {
    id: 'multani-haldi',
    slug: 'multani-haldi',
    name: 'Multani + Haldi',
    subtitle: 'The Golden Ritual',
    description:
      'Multani Mitti thoughtfully paired with turmeric for a naturally inspired ritual.',
    longDescription:
      'Curated using wild turmeric sourced for its vibrant natural character and traditional significance in Indian ceremonies, blended in precise proportion with earthy Multani Mitti.',
    image: multaniHaldiImg,
    status: 'Launching Soon',
    ingredients: ['Multani Mitti (Fuller’s Earth)', 'Curcuma Longa (Wild Turmeric Powder)'],
    weight: '150g net wt.',
    packagingNote: 'Textured compostable paper pouch with resealable protective seal',
    ritualGuide: 'Combine with natural yogurt or water into a creamy, golden mask. Enjoy the warming sensory richness of sun-cured turmeric.',
    shopifyHandle: 'multani-haldi',
    shopifyProductId: '',
  },
  {
    id: 'multani-neem',
    slug: 'multani-neem',
    name: 'Multani + Neem',
    subtitle: 'The Botanical Clarifier',
    description:
      'A botanical blend bringing together traditional Multani Mitti and neem.',
    longDescription:
      'Deeply inspired by rural apothecary wisdom, shade-dried neem leaves are ground with Multani clay to offer a crisp, botanical earth treatment with an uplifting herbal profile.',
    image: multaniNeemImg,
    status: 'Launching Soon',
    ingredients: ['Multani Mitti (Fuller’s Earth)', 'Azadirachta Indica (Shade-Dried Neem Leaf Powder)'],
    weight: '150g net wt.',
    packagingNote: 'Earth-toned recyclable kraft container',
    ritualGuide: 'Blend with pure spring water. Inhale the crisp, green aroma as the earth absorbs excess oil and cleanses gently.',
    shopifyHandle: 'multani-neem',
    shopifyProductId: '',
  },
  {
    id: 'multani-sandalwood',
    slug: 'multani-sandalwood-powder',
    name: 'Multani Mitti + Sandalwood Powder',
    subtitle: 'The Timeless Scent',
    description:
      'Earthy Multani Mitti combined with the timeless aroma and character of sandalwood.',
    longDescription:
      'A fragrant confluence of rich mineral clay and finely ground ethical sandalwood wood flour. Revered for its grounding, serene aroma and deeply calming sensory presence.',
    image: multaniSandalwoodImg,
    status: 'Launching Soon',
    ingredients: ['Multani Mitti (Fuller’s Earth)', 'Santalum Album (Sandalwood Wood Flour)'],
    weight: '100g net wt.',
    packagingNote: 'Amber UV-protective vessel with minimal typographic label',
    ritualGuide: 'Blend with milk or floral water. Let the soothing wood aroma create an unhurried sanctuary during your skincare ritual.',
    shopifyHandle: 'multani-sandalwood-powder',
    shopifyProductId: '',
  },
];
