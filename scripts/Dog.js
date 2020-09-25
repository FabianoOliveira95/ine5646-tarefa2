class Dog {
    constructor(position, dogBreed, description, imageUrl) {
        this._createDogItem = this._createDogItem.bind(this);
        this._HasLike = this._HasLike.bind(this);
        this._HasDislike = this._HasLike.bind(this);
        this._setHasLike = this._setHasLike.bind(this);
        this._setHasDislike = this._setHasDislike.bind(this);
        this.position = position;
        this.dogBreed = dogBreed;
        this.description = description;
        this.imageUrl = imageUrl
        this.hasLike = false;
        this.hasDislike = false;
    }

    _createDogItem() {

      const green = $(`<button class="like-button lk-btn" id="green`+ this.position +`">`);
      green.on("click", function(){
        alert("clicked");
      });

      const red = $(`<button class="like-button lk-btn" id="red`+ this.position +`">`);
      const up = $(`<span id="up`+ this.position +`"> 0 </span>`);
      const dowb = $(`<span id="down`+ this.position +`"> 0 </span>`);

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
        <button class="like-button lk-btn green`+ this.position +`" onclick="green`+ this.position +`()">
        <i class="fa fa-thumbs-up fa-lg" aria-hidden="true"></i>
        </button>
        <span class="up`+ this.position +`"> 0 </span>
        <button class="like-button lk-btn red`+ this.position +`" onclick="red`+ this.position +`()">
        <i class="fa fa-thumbs-down fa-lg" aria-hidden="true"></i>
        </button>
        <span class="down`+ this.position +`"> 0 </span>
        <hr/>
        `;
    }

    _setHasLike(like) {
      this.hasLike = like;
    }

    _HasLike() {
      return this.hasLike;
    }

    _setHasDislike(dislike) {
      this.hasDislike = dislike;
    }

    _HasDislike() {
      return this.hasDislike;
    }
}