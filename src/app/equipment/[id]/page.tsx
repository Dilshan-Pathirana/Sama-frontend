import { equipment } from '@/data/equipment';
import EquipmentDetailClient from './EquipmentDetailClient';

export async function generateStaticParams() {
  return equipment.map((item) => ({ id: item.id }));
}

export default function EquipmentDetailPage({ params }: { params: { id: string } }) {
  const item = equipment.find((e) => e.id === params.id);
  // Pass the item to the client component
  // If not found, show not found message
  if (!item) return <div className="pt-24 text-center">Item not found</div>;
  return <EquipmentDetailClient item={item} />;
}
