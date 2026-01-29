import { equipment } from '@/data/equipment';
import EquipmentDetailClient from './EquipmentDetailClient';

export async function generateStaticParams() {
  return equipment.map((item) => ({ id: item.id }));
}

export default async function EquipmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = equipment.find((e) => e.id === id);
  // Pass the item to the client component
  // If not found, show not found message
  if (!item) return <div className="pt-24 text-center text-white">Item not found</div>;
  return <EquipmentDetailClient item={item} />;
}
