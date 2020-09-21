class Dog {
    constructor(position, dogBreed, description, imageUrl) {
        this._createDogItem = this._createDogItem.bind(this);
        this.position = position;
        this.dogBreed = dogBreed;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    _createDogItem() {
        return `
        <div class = "item">
        <div class = "item-number-container">
          <div class = "item-number">`+ this.position +`.</div>
        </div>
        <div class = "item-header">` + this.dogBreed + `</div>
        <div class = "paragraph-break"> </div>
        <p class = "item-text"> `+ this.description +`</p>
          <div class = "paragraph-break"> </div>
          <img src="`+ this.imageUrl +`"> </img>
        </div>

        <hr/>
        `;
    }
}