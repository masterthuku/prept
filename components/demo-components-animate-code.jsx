"use client";

import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import { Code2, File } from "lucide-react";

export const CodeDemo = ({ duration, delay, writing, cursor }) => {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="w-full sm:w-110 h-120 border-none"
      code={`import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dummyItems, dummyRentals } from "@/lib/dummy-data";


export default function Dashboard() {
  const totalInventory = dummyItems.length;
  const available = dummyItems.reduce((sum, i) => sum + i.available, 0);
  const hired = dummyItems.reduce((sum, i) => sum + (i.totalQuantity - i.available), 0);
  const underRepair = 2;

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader><CardTitle>Total Items</CardTitle></CardHeader>
          <CardContent><p className="text-5xl font-bold">{totalInventory}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Available</CardTitle></CardHeader>
          <CardContent><p className="text-5xl font-bold text-green-600">{available}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Hired Out</CardTitle></CardHeader>
          <CardContent><p className="text-5xl font-bold text-blue-600">{hired}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Under Repair</CardTitle></CardHeader>
          <CardContent><p className="text-5xl font-bold text-orange-600">{underRepair}</p></CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Active Rentals</CardTitle></CardHeader>
          <CardContent>
            {dummyRentals.map(r => (
              <div key={r.id} className="flex justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{r.client}</p>
                  <p className="text-sm text-muted-foreground">{r.eventDate} → {r.returnDate}</p>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Low Stock Alerts</CardTitle></CardHeader>
          <CardContent>
            {dummyItems.filter(i => i.available < 20).map(i => (
              <p key={i.id} className="py-2">⚠️ {i.name} — Only {i.available} left</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}`}
    >
      <CodeHeader icon={Code2} copyButton>
        Dashboard.jsx
      </CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="jsx"
        writing={writing}
        duration={duration}
        delay={delay}
      />
    </Code>
  );
};
