"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const sampleData = [
  { type: "product", title: "Coffee Beans" },
  { type: "product", title: "Espresso Machine" },
  { type: "product", title: "French Press" },
  { type: "article", title: "How to Brew the Perfect Coffee" },
  { type: "review", title: "Amazing Coffee Experience" },
  { type: "product", title: "Cappuccino Mug" },
  { type: "product", title: "Coffee Grinder" },
  { type: "product", title: "Cold Brew Kit" },
  { type: "product", title: "Coffee Filters" },
];

interface SearchDialogProps {
  isHovered: boolean;
  setNavbarHovered: (value: boolean) => void; // add setter
}
export function SearchDialog({ isHovered, setNavbarHovered }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredResults = sampleData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Trigger */}
      <button    className=" hover:bg-transparent hover:border-none" onClick={() => setOpen(true)}>
       <Search 
       
  className={`cursor-pointer hover:text-gray-800 ${isHovered ? 'text-black' : 'text-white'}`} 
/>
     
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center p-6">
          <div className="absolute top-6 right-6">
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:border-none hover:text-shadow-white"
              onClick={() => {
                setOpen(false);
                setNavbarHovered(false);
              }}
            >
              <X className="w-6 h-6 text-white " />
            </Button>
          </div>

          <div className="w-full max-w-4xl mt-auto flex flex-col items-center h-full justify-center">
            <input
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full border-b-2 mt-auto  border-white focus:outline-none focus:ring-0 text-white text-lg py-3 px-4  bg-transparent"
            />

            <div className="w-full  pb-8 max-h-[40vh] overflow-y-auto">
              {filteredResults.length > 0 ? (
                <div className="space-y-2">
                  {filteredResults.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      className="justify-start w-full text-left text-white hover:bg-white/10 py-4"
                      onClick={() => setOpen(false)}
                    >
                      <span className="capitalize mr-2 text-gray-300">{item.type}:</span>
                      <span className="text-white">{item.title}</span>
                    </Button>
                  ))}
                </div>
              ) : query ? (
                <p className="text-gray-400 text-center py-8">No results found for "{query}"</p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}