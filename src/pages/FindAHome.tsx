import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, X, BedDouble, Bath, Maximize, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScheduleCallForm } from '@/components/shared/ScheduleCallForm'
import { homes, type Home } from '@/data/homes'

type SortOption = 'name' | 'sqft-asc' | 'sqft-desc' | 'beds-desc'

export default function FindAHomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedBuilder, setSelectedBuilder] = useState<string>('all')
  const [selectedBeds, setSelectedBeds] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('name')
  const [showFilters, setShowFilters] = useState(false)

  const builders = useMemo(() => {
    const b = [...new Set(homes.map(h => h.builder))]
    return b.sort()
  }, [])

  const filteredHomes = useMemo(() => {
    let result = [...homes]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(h =>
        h.name.toLowerCase().includes(q) ||
        h.builder.toLowerCase().includes(q) ||
        h.description.toLowerCase().includes(q)
      )
    }

    if (selectedType !== 'all') result = result.filter(h => h.type === selectedType)
    if (selectedBuilder !== 'all') result = result.filter(h => h.builder === selectedBuilder)
    if (selectedBeds !== 'all') result = result.filter(h => h.beds === Number(selectedBeds))

    switch (sortBy) {
      case 'sqft-asc': result.sort((a, b) => a.sqft - b.sqft); break
      case 'sqft-desc': result.sort((a, b) => b.sqft - a.sqft); break
      case 'beds-desc': result.sort((a, b) => b.beds - a.beds); break
      default: result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [searchQuery, selectedType, selectedBuilder, selectedBeds, sortBy])

  const selectClass = "bg-surface-alt border border-border rounded-lg px-3 py-2.5 text-sm text-primary appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/30"

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-white mb-4"
          >
            Find Your Dream Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto mb-8"
          >
            Browse our complete collection of manufactured, mobile, and modular homes
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search by name, builder, or features..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-secondary/20 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 bg-surface-alt min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-primary">
                {filteredHomes.length} <span className="font-normal text-text-secondary">results</span>
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-border text-sm font-medium hover:bg-surface-alt transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Desktop filters */}
              <div className={`${showFilters ? 'flex' : 'hidden'} lg:flex flex-wrap items-center gap-3 w-full lg:w-auto`}>
                <div className="relative">
                  <select value={selectedType} onChange={e => setSelectedType(e.target.value)} className={selectClass}>
                    <option value="all">All Types</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Triple">Triple</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-text-muted" />
                </div>

                <div className="relative">
                  <select value={selectedBuilder} onChange={e => setSelectedBuilder(e.target.value)} className={selectClass}>
                    <option value="all">All Builders</option>
                    {builders.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-text-muted" />
                </div>

                <div className="relative">
                  <select value={selectedBeds} onChange={e => setSelectedBeds(e.target.value)} className={selectClass}>
                    <option value="all">All Beds</option>
                    <option value="1">1 Bed</option>
                    <option value="3">3 Beds</option>
                    <option value="4">4 Beds</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-text-muted" />
                </div>

                <div className="relative">
                  <select value={sortBy} onChange={e => setSortBy(e.target.value as SortOption)} className={selectClass}>
                    <option value="name">Sort: Name</option>
                    <option value="sqft-desc">Sort: Largest</option>
                    <option value="sqft-asc">Sort: Smallest</option>
                    <option value="beds-desc">Sort: Most Beds</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-text-muted" />
                </div>

                {(selectedType !== 'all' || selectedBuilder !== 'all' || selectedBeds !== 'all') && (
                  <button
                    onClick={() => { setSelectedType('all'); setSelectedBuilder('all'); setSelectedBeds('all') }}
                    className="flex items-center gap-1 text-sm text-secondary hover:text-secondary-dark font-medium"
                  >
                    <X className="w-3.5 h-3.5" /> Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Home grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedType}-${selectedBuilder}-${selectedBeds}-${sortBy}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredHomes.map((home: Home, i: number) => (
                <motion.div
                  key={home.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 cursor-pointer"
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={home.image}
                      alt={home.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {home.availableToTour && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-secondary text-white shadow-lg text-xs">
                          Available to Tour
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-1">
                      Built by {home.builder}
                    </p>
                    <h3 className="text-lg font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {home.name}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="w-4 h-4 text-secondary/60" />
                        {home.beds} Bed
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-secondary/60" />
                        {home.baths} Bath
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Maximize className="w-4 h-4 text-secondary/60" />
                        {home.sqft.toLocaleString()} sqft
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-border/50">
                      <span className="text-xs font-medium bg-surface-alt px-2.5 py-1 rounded-md text-text-secondary">
                        {home.type} Section
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredHomes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-4">No homes match your current filters.</p>
              <Button
                variant="outline"
                onClick={() => { setSelectedType('all'); setSelectedBuilder('all'); setSelectedBeds('all'); setSearchQuery('') }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <ScheduleCallForm />
    </>
  )
}
