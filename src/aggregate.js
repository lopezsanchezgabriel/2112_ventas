// Unidades compradas por cada cliente
db.ventas.aggregate([
    {$group: {_id: "$Cliente", Unidades: {$sum: "$N_unids"}}}
])

//Importe total de la venta
db.ventas.aggregate([
    {$group: {_id: "$Vendedor", Total_venta: {$sum: {$multiply:["$Prec_unid_emp", "$N_unids"]}}}}
])

// Beneficios de cada cliente
db.ventas.aggregate([
    {$group: {_id: "$Cliente", Beneficio: {$sum: {$multiply:[{$subtract:["$Prec_unid","$Prec_unid_emp"]},"$N_unids"]}}}}
])

//Mejores clientes
db.ventas.aggregate([
    {$group: {_id: "$Cliente", Total_gastado: {$sum: {$multiply:["$Prec_unid_emp", "$N_unids"]}}}},
    {$project:{Empresa: "$Cliente", Total:{$max: "Total_gastado"}}}
])


// Unidades compradas por cada cliente
db.ventas.aggregate([
    {$group: {_id: "$Cliente", Unidades: {$sum: "$N_unids"}}}
])


