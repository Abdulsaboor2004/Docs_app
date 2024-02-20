import React, { useState } from "react";

const Editor = () => {
  const [formData, setFormData] = useState({
    filename: "",
    category: "",
    slug: "/my-blog-name/",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the blog data (including the content) using formData
    // Redirect the user to the Homepage after saving
  };

  return (
    <div className="xs:flex-row sm:w-[80%] sm:h-[78%] flex flex-wrap xs:gap-5 xs:absolute xs:top-1/2 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:-translate-y-1/2 xs:w-[71.2%] rounded-3xl bg-gray-800 sm:items-center sm:justify-center sm:flex-col">
      <p class="text-3xl font-bold leading-7 text-gray-200 text-center">
        Create a New Blog
      </p>
      <form onSubmit={handleSubmit} className="gap-5 flex flex-col">
        <label class="font-semibold leading-none text-gray-300 ">
          File Name
        </label>
        <input
          type="text"
          name="filename"
          value={formData.filename}
          onChange={handleChange}
          placeholder="e.g. Why Tailwind is Best CSS Framework"
          class="leading-none text-gray-50 text-sm p-2 focus:outline-none focus:border-blue-700 text-ellipsis border-0 rounded focus-within:bg-gray-900 bg-gray-700"
        />

        <label class="font-semibold leading-none text-gray-300">
          Blog's Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          class="leading-none text-gray-50 text-sm p-2 focus:outline-none focus:border-gray-400 border-0 focus:bg-gray-900  bg-gray-700 rounded"
        >
          <option value="">Choose a Niche</option>
          <option value="technology">🔧 Technology</option>
          <option value="lifestyle">🏝 Lifestyle</option>
          <option value="travel">✈️ Travel</option>
          <option value="food">🍔 Food</option>
          <option value="health">🏥 Health</option>
          <option value="fitness">💪 Fitness</option>
          <option value="fashion">👗 Fashion</option>
          <option value="business">💼 Business</option>
          <option value="finance">💰 Finance</option>
          <option value="education">🎓 Education</option>
          <option value="entertainment">🎬 Entertainment</option>
          <option value="sports">⚽️ Sports</option>
          <option value="music">🎵 Music</option>
          <option value="arts">🎨 Arts</option>
          <option value="science">🔬 Science</option>
        </select>

        <label class="font-semibold leading-none text-gray-300 ">
          Slug <span className="text-xs">("Last of URL")</span>
        </label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="Similar to File Name"
          class="leading-none text-gray-50 text-sm p-2 focus:outline-none focus:border-blue-700 border-0 focus-within:bg-gray-900 bg-gray-700 rounded "
        />
        <label className="font-semibold leading-none text-gray-300">
          Blog:
        </label>

        {/* <textarea
            
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your content here..."
            className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 border-0 focus-within:bg-gray-900 bg-gray-700 rounded"
          /> */}

        <button
          type="submit"
          class=" font-semibold leading-none text-white py-4 px-10 bg-indigo-500 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 border-none outline-none"
        >
          Save Blog
        </button>
      </form>
    </div>
  );
};

export default Editor;
