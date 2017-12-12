<template>
    <div>
        <h1>Documents</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Create Doc</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td class="col-md-5">Author</td>
                <td class="col-md-5">Document</td>
                <td class="col-md-2">Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items">
                    <td class="col-md-5">{{ item.author }}</td>
                    <td class="col-md-5">{{ item.name }}</td>
                    <td class="col-md-2">
                        <router-link :to="{name: 'EditItem', params: { id: item._id }}" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
