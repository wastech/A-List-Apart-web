<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <div class="title">
            <h1>wastech</h1>
          </div>

          <div class="img">
            <img
              src="https://secure.gravatar.com/avatar/20fe19503c38d0aaf98caf97ab62d762?s=100&r=pg&d=mm"
              alt
            />
            <div class="name">
              <h2>wastect</h2>
            </div>
          </div>

          <div class="paragrph">
            <p class="text">
              Our authors are awesome and we love them. From structured markup to “the ebb and flow of things,” A List Apart’s contributing writers have changed the way professionals in this industry conceive, design, produce, code, and distribute web content. In the process, these contributors have won design jobs, book contracts, speaking deals, and the near-universal admiration of their peers around the world.
              Maybe you can be one of us—the few, the proud, the contributing writers of A List Apart. Fame, fortune, and your name on a CSS technique await you. Read our Contribute section to learn more about what our readers and editors are looking for.
              Meanwhile, inspire yourself by studying the ALA writers who have come before you—from A to Z.
            </p>
          </div>
          <div class="from">
            <h3>
              also from this author
            </h3>
          </div>
          <div class="human">
            <h2>
              Human-to-Human Design
            </h2>
          </div>
          <div class="date">
            June 26, 2007
          </div>
          <div class="text">
          Help your audience fall in love with you by moving beyond human-to-computer interfaces and embracing human-to-human design.

        </div>
        </div>

        <div class="col-sm-5">
        <authorSide/>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import authorSide from '@/components/authorSide.vue'
export default {
  components:{
      authorSide
    },
  data() {
    
    return {
      items: [],
    };
  },
};
</script>
<style scoped>
h1{
  font-family: fantasy;
  margin-top: 2em;
}
p{
overflow: auto;
  max-height: 30%;
}
.img {
  text-align: center;

  margin-top: 2rem;
  margin-bottom: 1rem;
}
.from{
  margin-top: 3em;
}
img {
  max-width: 30%;
  width: 25%;
  object-fit: cover;
  border-radius: 50%;
  margin: 6em solid red;
}
.col-sm-7 {
  border-right: 2px solid #ccc;
}
.main {
  border-top: 2px solid #ccc;
}
.text {
  font-size: xx-large;
  font-family: Georgia,Times,Times New Roman,serif;
  font-size: 1.8rem;
    line-height: 1.7;
}
.container{
  max-width: 70%;
}
</style>