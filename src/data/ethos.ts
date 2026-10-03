import { EthosPrinciple, IngredientItem } from '../types/product';

export const ETHOS_PRINCIPLES: EthosPrinciple[] = [
  {
    number: '01',
    title: 'Conscious',
    quote: 'We believe everyday choices can be thoughtful choices.',
    description:
      'From mindful sourcing to deliberate formulations, every step is undertaken with awareness and respect for the earth and people.',
  },
  {
    number: '02',
    title: 'Rooted',
    quote: 'Inspired by ingredients, traditions and knowledge passed through generations.',
    description:
      'We look to time-tested Indian household wisdom and nature’s timeless botanical pantry, reimagining ancestral rituals for modern living.',
  },
  {
    number: '03',
    title: 'Simple',
    quote: 'Fewer distractions. Thoughtfully considered ingredients and purposeful products.',
    description:
      'No unnecessary additives, no 20-step routines, no filler. Only pure botanical essences and mineral-rich clays with purpose.',
  },
  {
    number: '04',
    title: 'Beautiful',
    quote: 'Because conscious living should feel beautiful, not complicated.',
    description:
      'Rituals should delight the senses—from the quiet tactile feeling of raw earth to the delicate morning fragrance of rose and sandalwood.',
  },
];

export const INGREDIENTS_STORY: IngredientItem[] = [
  {
    id: 'multani-mitti',
    name: 'Multani Mitti',
    hindiName: 'मुल्तानी मिट्टी',
    botanicalName: "Fuller's Earth Clay (Smectite/Bentonite)",
    role: 'The Mineral Core',
    story:
      'Sedimentary clay naturally formed through weathered volcanic ash and geological deposits. For centuries across the subcontinent, it has served as an intuitive, gentle cooling cleanser that draws away surface impurities while preserving the skin’s natural balance.',
    notes: ['Naturally mineral-dense', 'Silky micro-milled clay', 'Sun-dried & unbleached'],
  },
  {
    id: 'rose',
    name: 'Rose',
    hindiName: 'गुलाब',
    botanicalName: 'Rosa Damascena',
    role: 'The Floral Softness',
    story:
      'Celebrated in classic Indian poetry and traditional steam distillation, the Indian Damask rose offers a gentle sweetness and soothing touch. Its delicate aromatic profile turns everyday skincare into a calming, sensory retreat.',
    notes: ['Indigenous fragrant petals', 'Natural hydro-distillate essence', 'Cooling sensory character'],
  },
  {
    id: 'haldi',
    name: 'Haldi',
    hindiName: 'हल्दी',
    botanicalName: 'Curcuma Longa',
    role: 'The Golden Root',
    story:
      'More than an ingredient—an auspicious cultural fixture in Indian ritual and daily wellness. Cured rhizomes provide a gentle warmth and sunny radiance, traditionally cherished for clarity and natural glow.',
    notes: ['Pure wild-harvested turmeric', 'Golden rhizome powder', 'Ancestral ritual staple'],
  },
  {
    id: 'neem',
    name: 'Neem',
    hindiName: 'नीम',
    botanicalName: 'Azadirachta Indica',
    role: 'The Botanical Clarifier',
    story:
      'Known colloquially as the village pharmacy, the neem tree has stood guard beside Indian courtyards for millenia. Its bitter, cooling leaves are hand-picked and shade-dried to retain crisp botanical freshness and purifying qualities.',
    notes: ['Carefully shade-dried leaves', 'Clarifying botanical profile', 'Traditional purifying herb'],
  },
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    hindiName: 'चंदन',
    botanicalName: 'Santalum Album',
    role: 'The Sacred Wood',
    story:
      'Renowned worldwide for its warm, velvety wood aroma and meditative stillness. Responsibly milled sandalwood wood flour imparts a luxurious, grounding character to our earthen blends.',
    notes: ['Ethically sourced heartwood', 'Subtle, lingering aroma', 'Grounding & soothing presence'],
  },
];
