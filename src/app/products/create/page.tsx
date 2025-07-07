"use client";

import { useUser } from "@/domains/auth/context/UserContext";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

function CreateProductPage() {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
    brand: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user } = useUser();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(user, "usr");
      const res = await axios.post("/api/products/create", {
        userId: user?.id,
        ...form,
      });
      console.log(res);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 4);
    setImages(files);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Product</h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}
        <div className="p-5 bg-gray-100 rounded">
          <label className="block mb-2 font-medium">Product Images (4)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full mb-4"
          />
        </div>
        <div className="flex gap-2 mb-4">
          {images.map((img, i) => (
            <Image
              width={100}
              height={100}
              key={i}
              src={URL.createObjectURL(img)}
              alt={`Preview ${i + 1}`}
              className="w-20 h-20 object-cover rounded border"
            />
          ))}
        </div>
        <label className="block mb-2 font-medium">Product Name</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          required
        />
        <label className="block mb-2 font-medium">Quantity</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border rounded"
          value={form.quantity}
          onChange={(e) => setForm((f) => ({ ...f, quantity: e.target.value }))}
          required
        />
        <label className="block mb-2 font-medium">Price</label>
        <input
          type="number"
          className="w-full mb-4 p-2 border rounded"
          value={form.price}
          onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
          required
        />
        <label className="block mb-2 font-medium">Brand Name</label>
        <input
          type="text"
          className="w-full mb-6 p-2 border rounded"
          value={form.brand}
          onChange={(e) => setForm((f) => ({ ...f, brand: e.target.value }))}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}

export default CreateProductPage;
