export default {
  install (Vue, options) {
    Vue.component('v-svg', {
      render (h) {
        return h('svg', {
          attrs: {
            width: this.width,
            height: this.height,
            viewBox: this.viewBox,
            className: options.className || ''
          },
          style: {
            display: 'inline-block',
            strokeWidth: 0,
            stroke: 'currentColor',
            fill: 'currentColor',
            overflow: 'hidden'
          }
        }, [ h('use', { attrs: { 'xlink:href': `${this.filepath}#${this.prefix}${this.sprite}` } }) ])
      },
      data () {
        return {
          width: null,
          height: null,
          viewBox: null,
        }
      },
      props: {
        filepath: {
          type: String,
          default: options.filepath || ''
        },
        prefix: {
          type: String,
          default: options.prefix || ''
        },
        sprite: {
          type: String,
          default: options.sprite || ''
        },
        size: {
          type: String,
          default: options.size || '32'
        }
      },
      created () {
        let sizes = this.size.split(/[ ,|]+/)
        let length = sizes.length
        this.width = length < 4 ? sizes[0] : sizes[2]
        this.height = length < 4 ? sizes[--length] : sizes[3]
        this.viewBox = length < 4 ? `0 0 ${this.width} ${this.height}` : sizes.join(' ')
      }
    })
  }
}
