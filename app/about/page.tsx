import Link from "next/link";
import { ArrowRight, Heart, Award, Users, Cookie } from 'lucide-react';

const teamMembers = [
  {
    name: "Maya Chen",
    role: "Founder and Head Baker",
    image: "/images/team-maya-chen-founder.jpg",
    bio: "Maya started it all with her family recipes and a dream. She oversees every new flavor development.",
  },
  {
    name: "Carlos Rivera",
    role: "Shake Master",
    image: "/images/team-carlos-rivera-shake-master.jpg",
    bio: "Carlos spent 5 years at top ice cream parlors before joining us. He crafts every shake recipe from scratch.",
  },
  {
    name: "Priya Patel",
    role: "Pastry Chef",
    image: "/images/team-priya-patel-pastry-chef.jpg",
    bio: "Trained in Paris, Priya brings classical technique to our cookie lineup. She is behind our seasonal specials.",
  },
  {
    name: "Jake Thompson",
    role: "Operations Manager",
    image: "/images/team-jake-thompson-operations.jpg",
    bio: "Jake ensures every order goes out on time and every customer gets the freshest possible product.",
  },
];

const values = [
  {
    icon: "heart",
    bg: "bg-pink-50",
    title: "Made with Love",
    desc: "Every item is crafted by hand with genuine care. We treat every order as if it were for our own family.",
  },
  {
    icon: "award",
    bg: "bg-amber-50",
    title: "Uncompromising Quality",
    desc: "We source only the finest ingredients — Belgian chocolate, European butter, farm-fresh dairy. No exceptions.",
  },
  {
    icon: "cookie",
    bg: "bg-brown-50",
    title: "Freshness First",
    desc: "We bake in small batches throughout the day. If it was not baked today, it does not leave our kitchen.",
  },
  {
    icon: "users",
    bg: "bg-green-50",
    title: "Community Focused",
    desc: "We partner with local farms and suppliers, and donate unsold baked goods to local shelters every evening.",
  },
];

const stats = [
  { number: "6+", label: "Years of Baking" },
  { number: "10K+", label: "Happy Customers" },
  { number: "500K+", label: "Cookies Baked" },
  { number: "100%", label: "Real Ingredients" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-gradient-to-br from-brown-800 to-brown-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-pink-500/20 text-pink-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-pink-500/30">
            Our Story
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold mb-5">
            Baked with Love Since 2018
          </h1>
          <p className="text-brown-200 text-lg leading-relaxed max-w-2xl mx-auto">
            What started as a home kitchen experiment has grown into a beloved local institution. We believe the best things in life are simple: a warm cookie, a cold shake, and good company.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">How It All Started</span>
              <h2 className="font-display text-4xl font-extrabold text-brown-800 mt-2 mb-6">
                From a Home Kitchen to Your Door
              </h2>
              <div className="space-y-4 text-brown-600 leading-relaxed">
                <p>
                  It all started in 2018 when our founder, Maya Chen, began baking cookies for her neighbors in Los Angeles. Armed with her family recipe book and a passion for quality ingredients, she quickly developed a reputation for the most irresistible chocolate chip cookies in the neighborhood.
                </p>
                <p>
                  Word spread fast. Within months, Maya was baking hundreds of cookies a week from her home kitchen. When her best friend suggested pairing the cookies with hand-crafted milkshakes, Cookies and Shakes Co. was born.
                </p>
                <p>
                  Today, we operate from our dedicated bakery kitchen in Los Angeles, delivering fresh-baked cookies and hand-crafted shakes to thousands of happy customers every week. The recipes have been refined, but the philosophy remains the same: real ingredients, made with care, delivered with love.
                </p>
              </div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-2xl mt-8 transition-all duration-200 hover:scale-105"
              >
                Try Our Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-4xl overflow-hidden shadow-2xl">
                <img
                  src="/images/bakery-kitchen-baking-cookies.jpg"
                  alt="Our bakery kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl">
                <p className="font-display text-3xl font-extrabold text-brown-800">2018</p>
                <p className="text-brown-500 text-sm">Founded with love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brown-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-display text-4xl font-extrabold text-brown-800 mt-2 mb-4">Our Core Values</h2>
            <p className="text-brown-500 text-lg max-w-xl mx-auto">
              Every decision we make from ingredient sourcing to packaging is guided by these principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className={"w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 " + val.bg}>
                  {val.icon === "heart" && <Heart className="w-7 h-7 text-pink-500" />}
                  {val.icon === "award" && <Award className="w-7 h-7 text-amber-500" />}
                  {val.icon === "cookie" && <Cookie className="w-7 h-7 text-brown-500" />}
                  {val.icon === "users" && <Users className="w-7 h-7 text-green-500" />}
                </div>
                <h3 className="font-display font-bold text-lg text-brown-800 mb-2">{val.title}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">The People Behind the Magic</span>
            <h2 className="font-display text-4xl font-extrabold text-brown-800 mt-2 mb-4">Meet Our Team</h2>
            <p className="text-brown-500 text-lg max-w-xl mx-auto">
              A small but mighty crew of bakers, shake artists, and delivery heroes who make the magic happen every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-100 to-brown-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-bold text-lg text-brown-800">{member.name}</h3>
                <p className="text-pink-500 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-brown-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brown-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl lg:text-5xl font-extrabold text-pink-300 mb-2">{stat.number}</p>
                <p className="text-brown-200 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-pink-500 to-pink-600 rounded-4xl p-12 text-center text-white shadow-2xl shadow-pink-200">
          <h2 className="font-display text-4xl font-extrabold mb-4">Ready to Taste the Difference?</h2>
          <p className="text-pink-100 text-lg mb-8">
            Experience the quality and care that goes into every cookie and shake we make.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-10 py-4 rounded-2xl hover:bg-pink-50 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Order Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
