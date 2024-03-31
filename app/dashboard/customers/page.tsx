'use server'
import CustomersTable from "@/app/ui/customers/table"
import { fetchCustomers } from "@/app/lib/data"

export default async function Customers({params} : {params: {id : string}}) {
  const id = params.id;

  const clientes = await fetchCustomers();

  console.log(clientes);

  return (
    <main>
      <div>
        {/* Utilizar la lista de clientes (clientes) en vez de cliente */}
        <CustomersTable customers={clientes} />
      </div>
    </main>
  );
};


