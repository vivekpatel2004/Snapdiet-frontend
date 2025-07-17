// src/Components/Services.jsx
import "../style/Services.css";

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        SnapDite is your intelligent food assistant. Using advanced AI and image recognition, we provide a smart way to identify food, analyze ingredients, and recommend recipes. Here's what we offer:
      </p>

      <div className="services-grid">
        <div className="service-box">
          <h2>🍽️ Food Recognition</h2>
          <p>
            Just snap a photo of your dish and let our deep learning model identify the food item with high accuracy. Ideal for users who want to know what they're eating or tracking their meals.
          </p>
        </div>

        <div className="service-box">
          <h2>🧪 Ingredient Detection</h2>
          <p>
            Get a list of ingredients used in the identified food. Our trained CNN model analyzes visual cues to predict what’s inside the meal – whether it’s paneer, spices, or vegetables.
          </p>
        </div>

        <div className="service-box">
          <h2>📊 Nutrition Analysis</h2>
          <p>
            Along with food name, you get complete nutritional information including calories, fat, carbs, and protein – helping you make informed dietary decisions.
          </p>
        </div>

        <div className="service-box">
          <h2>📖 Recipe Suggestion</h2>
          <p>
            Based on the recognized food, SnapDite suggests detailed recipes using Spoonacular API — includes steps, ingredients, and even video tutorials to help you cook like a pro.
          </p>
        </div>

        <div className="service-box">
          <h2>📱 Mobile & Web Friendly</h2>
          <p>
            Our app is fully responsive and optimized for mobile and desktop use. Take a photo anywhere — at home, in a restaurant, or on the go — and get instant results.
          </p>
        </div>

        <div className="service-box">
          <h2>🌍 Multi-Cuisine Support</h2>
          <p>
            Whether it's Indian, Chinese, Italian or street food, SnapDite handles a wide range of cuisines. Our database keeps expanding as the model learns more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
