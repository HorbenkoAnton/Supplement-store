import React from 'react';
import './InformationPage.css'; 

function InformationPage() {
  return (
    <div className="information-page">
      <h1>Information</h1>
      <section>
        <h2>Our Mission</h2>
        <p><strong>Our goal is to provide wide choice of supplement 
            for everyone.As for beginners as for experienced.</strong></p>
      </section>
      <h2><strong>About supplements</strong></h2>
      <section>
        <p><strong>Protein powder - </strong>powdered forms of protein that come from plants 
        (soybeans, peas, rice, potatoes, or hemp), eggs, or milk (casein or whey protein).
        Protein is building material for our muscles, and in powder form it's just easier to consume.</p>
      </section>
      <section>
        <p><strong>Creatine - </strong>a substance found naturally in muscle cells.
         It helps your muscles produce energy during heavy lifting or high intensity exercise. 
         It's not steroid ,and it's safe to consume if you don't do high doses everyday.</p>
      </section>
      <section>
        <p><strong>Pre-workout - </strong>are taken to increase endurance, energy, and focus during a workout. Pre-workout supplements contain a variety of 
        ingredients such as caffeine and creatine, differing by capsule or powder products.</p>
      </section>
    </div>
  );
}

export default InformationPage;
