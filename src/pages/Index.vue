<template>
  <q-page class="flex-stretch">
    <q-table
      :data="data"
      :columns="columns"
      :rows-per-page-options="[5, 10, 25, 50]"
      :grid="$q.screen.xs"
      rows-per-page-label="Usuarios por pagina"
      class="q-table-sticky-header absolute-top-left full-width"
      title="Usuarios"
      color="primary"
      row-key="id"
      style="height:100%;"
      square
      flat
      binary-state-sort
    >
      <template #top>
        <ms-table-header
          icon="eva-person-outline"
          title="Usuarios"
        />
      </template>
      <template #body-cell-nombre="props">
        <q-td
          :props="props"
          class="text-bold text-uppercase"
          style="color: #47546d;"
        >
          {{ props.row.nombre }}
        </q-td>
      </template>
      <template #body-cell-preparatoria="props">
        <q-td
          :props="props"
        >
          <q-badge rounded  :class="props.row.preparatoria ? 'yes' : 'no'">
            {{ props.row.preparatoria ? 'Sí' : 'No' }}
          </q-badge>
        </q-td>
      </template>
      <template #body-cell-detalles="props">
        <q-td
          :props="props"
          class="text-bold text-uppercase"
        >
          <q-btn flat round color="primary" icon="eva-more-vertical-outline">
            <q-menu>
              <q-list dense style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Detalles</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Editar</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Eliminar</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { api } from 'boot/axios'
import MsTableHeader from 'components/ms-table-header.vue'
export default {
  name: 'PageIndex',
  components: {
    MsTableHeader
  },
  data(){
    return {
      data: [],
      columns: [
        {
          name: '_id',
          field: '_id',
          required: true,
          label: 'ID',
          align: 'left',
          sortable: true
        },
        {
          name: 'nombre',
          field: 'nombre',
          required: true,
          label: 'Nombre',
          align: 'left',
          sortable: true
        },
        {
          name: 'puesto',
          field: 'puesto',
          required: true,
          label: 'Puesto',
          align: 'left',
          sortable: true
        },
        {
          name: 'edad',
          field: 'edad',
          required: true,
          label: 'Edad',
          align: 'left',
          sortable: true
        },
        {
          name: 'preparatoria',
          field: 'preparatoria',
          required: true,
          label: 'Preparatoria',
          align: 'center',
          sortable: true
        },
        {
          name: 'detalles',
          field: 'detalles',
          required: true,
          label: '',
          align: 'center',
          sortable: true
        }
      ]
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    query () {
    api.get('/devtest/')
      .then((response) => {
        this.data = response.data.data
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
  },
  }
}
</script>
