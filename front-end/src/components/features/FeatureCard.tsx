interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({icon, title, description,}: FeatureCardProps) {
  return (
    <div
      className="
        bg-gray-900 border border-gray-800 rounded-xl p-6 text-left
        transition-all duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-lg hover:shadow-blue-500/10
      "
    >
      <div className="text-blue-400 text-2xl mb-3">{icon}</div>

      <h3 className="text-white font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
}