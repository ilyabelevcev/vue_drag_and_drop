

var app = new Vue({
   el: '#site',
   data: {
      items: [
         {
            id: 0,
            title: "Действие из первой зоны",
            categoryId: 0,
         },
         {
            id: 1,
            title: "Действие из первой зоны",
            categoryId: 0,
         },
         {
            id: 2,
            title: "Действие из второй зоны",
            categoryId: 1,
         },
         {
            id: 3,
            title: "Действие из третьей зоны",
            categoryId: 2,
         },
      ],
      categories: [
         {
            id: 0,
            title: "Первая Зона",
         },
         {
            id: 1,
            title: "Вторая Зона",
         },
         {
            id: 2,
            title: "Третья Зона",
         },
      ],
   },
   methods: {
      onDragStart: function (e, item) {
         e.dataTransfer.dropEffect = "move"
         e.dataTransfer.effectAllowed = "move"
         e.dataTransfer.setData("itemId", item.id.toString())
      },
      onDrop: function(e, categoryId, items) {
         const itemId = e.dataTransfer.getData("itemId")
         items = items.map(function(i) {
            if(i.id == itemId) {
               i.categoryId = categoryId
            }
            return i
         })
      },
   }
})