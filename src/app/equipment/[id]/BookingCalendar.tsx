import { useState } from 'react';

export default function BookingCalendar({ equipmentId }: { equipmentId: string }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [available, setAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function checkAvailability() {
    setLoading(true);
    setMessage('');
    const res = await fetch(`/api/equipment/availability?equipmentId=${equipmentId}&startDate=${startDate}&endDate=${endDate}`);
    const data = await res.json();
    setAvailable(data.available);
    setLoading(false);
  }

  async function book() {
    setLoading(true);
    setMessage('');
    const res = await fetch('/api/booking/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ equipmentId, startDate, endDate }),
    });
    if (res.ok) {
      setMessage('Booking request submitted!');
    } else {
      const err = await res.json();
      setMessage(err.error || 'Booking failed');
    }
    setLoading(false);
  }

  return (
    <div className="bg-white/5 p-4 rounded-xl mt-6">
      <h3 className="font-semibold mb-2">Book this equipment</h3>
      <div className="flex flex-col md:flex-row gap-2 mb-2">
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="rounded px-2 py-1" />
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="rounded px-2 py-1" />
        <button className="bg-primary text-white px-3 py-1 rounded" onClick={checkAvailability} disabled={loading || !startDate || !endDate}>
          Check Availability
        </button>
      </div>
      {available !== null && (
        <div className={available ? 'text-green-600' : 'text-red-600'}>
          {available ? 'Available!' : 'Not available for selected dates.'}
        </div>
      )}
      {available && (
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded" onClick={book} disabled={loading}>
          Book Now
        </button>
      )}
      {message && <div className="mt-2 text-sm">{message}</div>}
    </div>
  );
}
