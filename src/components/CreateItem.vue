<template>
  <div>
    <h1>Create New Markdown Document</h1>
    <form v-on:submit.prevent="addItem">
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2"><router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">Return to Doc list</router-link></div>
        </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Author Name:</label>
            <input type="text" class="form-control" v-model="item.author">
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Document Name:</label>
              <input type="text" class="form-control col-md-6" v-model="item.name" />
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Raw text:</label>
              <textarea class="form-control col-md-6" v-model="item.text" rows="28" style="resize: none"></textarea>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Markdown text:</label>
              <div v-html="compiledMarkdown"></div>
            </div>
          </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>
    </form>
  </div>
</template>
<script>
    const marked = require("marked");
    export default {
        data(){
            return{
                item:{text: '# Hello'}
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.item.text, { sanitize: true })
            }
        },
        methods: {
            addItem(){
                let uri = 'http://localhost:4000/items/add';
                this.axios.post(uri, this.item).then((response) => {
                    this.$router.push({name: 'DisplayItem'})
                })
            }
        }
}
</script>
