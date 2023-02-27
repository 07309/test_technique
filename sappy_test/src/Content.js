import React from 'react';
import './content.css';
import { FaUserCircle } from 'react-icons/fa';


function Content() {
  const testimonials = [
    {
      id: 1,
      name: "Jean-Hugues L.",
      text: "76 ans, Sainte-Suzanne",
      nb: "rapports d'humeur",
      button: "Réaliser le rapport d'humeur",
      icon: <FaUserCircle />
    },
    {
      id: 2,
      name: "Micheline P.",
      text: "86 ans, Saint-Denis",
      nb: "rapports d'humeur",
      button: "Réaliser le rapport d'humeur",
      icon: <FaUserCircle />
    },
    {
      id: 3,
      name: "Henry F.",
      text: "90 ans, Tampon",
      nb: "rapports d'humeur",
      button: "Réaliser le rapport d'humeur",
      icon: <FaUserCircle />
    }
  ];

  return (
    <div class="content">
        <div class="inside">
            <h1>Cahier de transmission</h1>
            <text>Curabitur interdum at metus at auctor. Suspendisse suscipit tincidunt mauris.</text>
        </div>
        <br></br>
        <h4 class="title">BÉNÉFICIAIRES ACTIFS</h4>
        <div style={{display: "flex", paddingTop: '20px'}}>
        {testimonials.map(testimonial => (
            <div key={testimonial.id} style={{flex: 1, margin: "0 10px"}}>
                <div style={{ display: 'inline-block' }}>
                {testimonial.icon}
            </div>
            <p>{testimonial.name}</p>
            <p>{testimonial.text}</p>
            <p>{testimonial.nb}</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
            {testimonial.button}
            </a>

            </div>
        ))}
        </div>
        </div>
  );
}

export default Content;
