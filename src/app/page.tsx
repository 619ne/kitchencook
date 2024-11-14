"use client"
/*import * as styles from './eclispe.module.css';*/
import * as styles from './expand.module.css';
import React, { useState,useRef, useEffect  }from 'react'
import { Search, User, Star, ChevronRight, Twitter, Facebook, Instagram, Clock, ChevronLeft } from 'lucide-react'
import Image from 'next/image'


const recipesOfTheDay = [
  { id: 1, name: 'Spicy Chicken Stir-Fry', image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Vegetable Pasta', image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Grilled Salmon', image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Beef Tacos', image: '/placeholder.svg?height=200&width=200' },
]

const trendingRecipes = [
  { id: 1, name: 'Mushroom Risotto', image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Vegetarian Pizza', image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Chocolate Cake', image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Greek Salad', image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Beef Burger', image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Sushi Rolls', image: '/placeholder.svg?height=200&width=200' },
  { id: 7, name: 'Chicken Curry', image: '/placeholder.svg?height=200&width=200' },
  { id: 8, name: 'Apple Pie', image: '/placeholder.svg?height=200&width=200' },
]

export default function RecipeGrid({ recipes = [] }: { recipes?: any[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  }

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 300 // Adjust this value to control scroll distance
    const container = scrollContainerRef.current
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  // Placeholder recipes if none are provided
  const placeholderRecipes = [
    { title: 'Delicious Recipe 1', time: 30, image: '/placeholder.jpg' },
    { title: 'Tasty Dish 2', time: 45, image: '/placeholder.jpg' },
    { title: 'Yummy Meal 3', time: 60, image: '/placeholder.jpg' },
    { title: 'Scrumptious Treat 4', time: 25, image: '/placeholder.jpg' },
    { title: 'Mouth-watering Delight 5', time: 40, image: '/placeholder.jpg' },
  ]

  const displayRecipes = recipes.length > 0 ? recipes : placeholderRecipes

  const [searchType, setSearchType] = useState('ingredient')
  const testimonials = [
    {
      id: 1,
      text: "This website has transformed my cooking! I can finally use all the ingredients in my pantry without any waste. The recipes are delicious and easy to follow.",
      author: "Sarah M.",
      rating: 5
    },
    {
      id: 2,
      text: "The step-by-step instructions make cooking feel less intimidating. I've learned so much!",
      author: "John D.",
      rating: 5
    },
    {
      id: 3,
      text: "Amazing variety of recipes. I especially love the quick weeknight dinner options.",
      author: "Emma R.",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-[url('/top-bgpic.jpeg')] bg-opacity-100">
      <header className="bg- shadow-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Cook</div>
          <nav>
            <ul className="flex space-x-24">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/recipe" className="text-gray-600 hover:text-gray-900">Recipes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
          <a href="/profilepage"><button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          <User className="h-5 w-5" />
          </button></a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section>
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
              Find the Perfect Recipe with
              <span className="text-orange-500">Ingredients</span>
              You<br />
              Have
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Search through a world of delicious recipes tailored to your ingredients. Discover new favorites, save them, and share with friends.
            </p>
          </div>

          {/* Right side - Illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Orange circle background */}
              <div /*className={styles.eclispe}*/>
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20"></div>
              </div>
              {/* Chef illustration */}
            </div>
          </div>
        </div>
      </div>
      <div className="place-items-center ">
              <div className=''>
                <button
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                    searchType === 'ingredient' ? 'hover:underline-white-4 text-white-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setSearchType('ingredient')}
                >
                  Ingredient
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                    searchType === 'recipe' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setSearchType('recipe')}
                >
                  Recipe
                </button>
              </div>
              <div className="align-center w-96">
                <input
                  type="text"
                  className="w-full max-w-xs hover:scale-x-200 transition-transform duration-300 rounded-full p-2 border border-gray-300 transform origin-center pl-4 pr-12 py-3"
                  placeholder={searchType === 'ingredient' ? "Search by ingredients (e.g., chicken, garlic, lemon)" : "Search for recipes"}
                />
              </div>
            </div>
    </section>
    <section className="py-8 recipe-grid-background">
      <style jsx>{`
        .recipe-grid-background {
           /* Default to semi-transparent orange */
          background-image: var(--recipe-grid-bg-image, url('/default-background.jpg'));
          background-blend-mode: overlay;
          background-size: cover;
          background-position: center;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          <span className="text-orange-500">Recipe</span> of the Day
        </h2>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayRecipes.map((recipe, index) => (
              <div
                key={index}
                className="flex-none w-72 snap-start"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{recipe.time} mins</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full ${
                canScrollLeft
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full ${
                canScrollRight
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6"><span className='text-orange'>Trending</span> Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipesOfTheDay.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{recipe.name}</h3>
                </div>
              </div>
            ))}
          </div><br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipesOfTheDay.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{recipe.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* testimoneys */}

        <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Chef Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Replace with actual image */}
            <div className="w-full h-full rounded-full bg-orange-500">
              <Image
                src="/testimoneychef.jpg"
                alt="Chef"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side - Testimonials */}
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              What they say <span className="text-orange-500">About Us</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 relative">
            <div className="mb-4">
              <p className="text-gray-700">
                {testimonials[currentIndex].text}
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
              ))}
            </div>

            <p className="font-semibold">{testimonials[currentIndex].author}</p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={previousTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 text-right">
          </div>
        </div>
      </div>
    </section>

{/* testimoneys end here */}

        <section className="mb-16">
          <div className="bg-orange-500 rounded-lg shadow-md p-8 flex items-center justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white mb-2">Get delicious and great food Recipes in your inbox</h2>
              <p className="text-white mb-4">Sign up for our newsletter and never miss a recipe!</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow pl-4 pr-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="bg-white text-orange-500 px-6 py-2 rounded-r-full hover:bg-gray-100 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            <img src="/placeholder.svg?height=300&width=300" alt="Delicious burger" className="hidden lg:block rounded-full" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cook</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recipes</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Browse Recipes</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Submit a Recipe</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Our Cookbook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Have a Great Recipe to Share?</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 flex items-center">
                Submit Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
            <p className="text-gray-400">
              © 2023 Cook. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}