export default class Palette {
    constructor(main, text, background, banner) {
        this.main = main
        this.text = text
        this.background = background
        this.banner = banner
    }

    toArray(){
        return [this.main, this.text, this.background, this.banner]
    }
}