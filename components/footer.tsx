export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-4xl font-serif mb-4 md:mb-0">Tamanna</h2>
          <div className="space-y-2">
            <p className="text-lg">Email - tamanna.suman26@gmail.com</p>
            <p className="text-lg">Mobile number - 8817563901</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center">
          <p>© {new Date().getFullYear()} Tamanna Suman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

