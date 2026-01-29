"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  verified: boolean;
  createdAt: string;
}

interface Booking {
  id: string;
  status: string;
  startDate: string;
  endDate: string;
  totalPrice: string;
  createdAt: string;
  items: Array<{ equipment: { name: string } }>;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [editName, setEditName] = useState('');
  const [editing, setEditing] = useState(false);
  const [history, setHistory] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch profile and rental history
    async function fetchData() {
      setLoading(true);
      const res = await fetch('/api/user/profile');
      if (res.status === 401) {
        router.push('/auth/login');
        return;
      }
      const data = await res.json();
      setProfile(data);
      setEditName(data.name);
      const historyRes = await fetch('/api/user/rental-history');
      setHistory(await historyRes.json());
      setLoading(false);
    }
    fetchData();
  }, [router]);

  const handleSave = async () => {
    await fetch('/api/user/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editName }),
    });
    setEditing(false);
    setProfile((p) => (p ? { ...p, name: editName } : p));
  };

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>Profile not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="mb-6 bg-white rounded shadow p-4">
        <div className="mb-2"><b>Email:</b> {profile.email}</div>
        <div className="mb-2">
          <b>Name:</b>{' '}
          {editing ? (
            <input
              className="border px-2 py-1 rounded"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          ) : (
            profile.name
          )}
        </div>
        <div className="mb-2"><b>Role:</b> {profile.role}</div>
        <div className="mb-2"><b>Verified:</b> {profile.verified ? 'Yes' : 'No'}</div>
        <div className="mb-2"><b>Joined:</b> {new Date(profile.createdAt).toLocaleDateString()}</div>
        <div>
          {editing ? (
            <>
              <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2" onClick={handleSave}>Save</button>
              <button className="bg-gray-300 px-3 py-1 rounded" onClick={() => setEditing(false)}>Cancel</button>
            </>
          ) : (
            <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => setEditing(true)}>Edit</button>
          )}
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Rental History</h2>
      <div className="bg-white rounded shadow p-4">
        {history.length === 0 ? (
          <div>No rentals yet.</div>
        ) : (
          <ul>
            {history.map((b) => (
              <li key={b.id} className="mb-4 border-b pb-2">
                <div><b>Status:</b> {b.status}</div>
                <div><b>Period:</b> {new Date(b.startDate).toLocaleDateString()} - {new Date(b.endDate).toLocaleDateString()}</div>
                <div><b>Total Price:</b> {b.totalPrice}</div>
                <div><b>Booked:</b> {new Date(b.createdAt).toLocaleDateString()}</div>
                <div><b>Items:</b> {b.items.map((i) => i.equipment.name).join(', ')}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
