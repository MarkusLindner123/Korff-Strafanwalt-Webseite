import React from "react";

const MapSection = () => {
  const anfahrt = `
    Rechtsanwalt Strafrecht Daniel Korff
    Kluckstraße 36
    10785 Berlin
  `;

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Hier finden Sie uns
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            {/* Karte mit funktionierendem Google Maps iFrame */}
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.406979208006!2d13.36444851579707!3d52.502847979810565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8519e4878a87b%3A0x6a2c91c0683074f7!2sKluckstra%C3%9Fe%2036%2C%2010785%20Berlin%2C%20Deutschland!5e0!3m2!1sde!2spl!4v1678854652233!5m2!1sde!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort der Kanzlei Korff auf Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
