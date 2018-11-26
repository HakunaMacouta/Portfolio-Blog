import animateScroll from 'scrollto-with-animation'

export default {
  methods: {
    scrollTo(pos, duration = 600, delay = 0) {
      return new Promise(resolve => {
        setTimeout(() => {
          animateScroll(document.documentElement, 'scrollTop', pos, duration, 'easeInOutSine', resolve)
        }, delay)
      })
    },
    kebabify(words) {
      return words
        .toLowerCase()
        .replace(' ', '-')
    },
    prettyDate(date) {
      return new Date(date).toString()
        .split(' ').slice(0, 4).join(' ')
        .replace(/( \d+)$/, ',$1')
    },
    beautifyAuthor(author) {
      return author.first_name + ' ' + author.last_name
    }
  }
}
