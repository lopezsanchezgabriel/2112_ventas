db.ventas.insertMany([
    {
        Prod: "PSP3000", 
        Depart: ["Entretenimiento", "Videojuegos", "Consolas", "Tecnología"],
        Prec_unid: 100, 
        N_unids: 350, 
        Fec_venta: ISODate("2008-07-20"), 
        Prec_unid_emp: 80,//precio unitario de la compra por parte de la empresa 
        Cliente: "Game", 
        Vendedor: "Sony Computer Entertainment"
    },
    {
        Prod: "PS4", 
        Depart: ["Entretenimiento", "Videojuegos", "Consolas", "Tecnología"],
        Prec_unid: 399.99, 
        N_unids: 1875, 
        Fec_venta: ISODate("2013-11-05"),
        Prec_unid_emp: 370,
        Cliente: "Game", 
        Vendedor: "Sony Computer Entertainment"
    },
    {
        Prod: "Xbox One", 
        Depart: ["Entretenimiento", "Videojuegos", "Consolas", "Tecnología"],
        Prec_unid: 399.99, 
        N_unids: 2350, 
        Fec_venta: ISODate("2013-11-12"),
        Prec_unid_emp: 370,
        Cliente: "Game", 
        Vendedor: "Microsoft"
    },
    {
        Prod: "Kult Iridium", 
        Depart: ["Accesorio", "Tecnología"],
        Prec_unid: 29.95, 
        N_unids: 420, 
        Fec_venta: ISODate("2020-06-10"),
        Prec_unid_emp: 25,
        Cliente: "Game", 
        Vendedor: "The G-Lab"
    },
    {
        Prod: "PS4 - God of War", 
        Depart: ["Entretenimiento", "Videojuegos"],
        Prec_unid: 69.69, 
        N_unids: 420, 
        Fec_venta: ISODate("2018-04-20"),
        Prec_unid_emp: 69,
        Cliente: "Game", 
        Vendedor: "Sony Computer Entertainment"
    },
    {
        Prod: "PS4 - Bloodborne", 
        Depart: ["Entretenimiento", "Videojuegos"],
        Prec_unid: 39.99, 
        N_unids: 345, 
        Fec_venta: ISODate("2015-03-20"),
        Prec_unid_emp: 35,
        Cliente: "Game", 
        Vendedor: "Sony Computer Entertainment"
    },
    //#######################################################################################################
    {
        Prod: "Mandarinas", 
        Depart: ["Alimentación"],
        Prec_unid: 0.15, 
        N_unids: 30000, 
        Fec_venta: ISODate("2020-06-11"),
        Prec_unid_emp: 0.10,
        Cliente: "Mercadona", 
        Vendedor: "El Tomate"
    },
    {
        Prod: "Calabazas", 
        Depart: ["Alimentación"],
        Prec_unid: 3.66, 
        N_unids: 470, 
        Fec_venta: ISODate("2020-06-11"),
        Prec_unid_emp: 3,
        Cliente: "Mercadona", 
        Vendedor: "El Tomate"
    },
    {
        Prod: "Granizado de limón", 
        Depart: ["Alimentación"],
        Prec_unid: 1, 
        N_unids: 2500, 
        Fec_venta: ISODate("2020-06-11"),
        Prec_unid_emp: 0.90,
        Cliente: "Mercadona", 
        Vendedor: "Congelados Pepe"
    },
    {
        Prod: "Té verde", 
        Depart: ["Alimentación"],
        Prec_unid: 2, 
        N_unids: 900, 
        Fec_venta: ISODate("2020-06-11"),
        Prec_unid_emp: 1.80,
        Cliente: "Mercadona", 
        Vendedor: "TeDoySalud"
    },
    {
        Prod: "Té negro", 
        Depart: ["Alimentación"],
        Prec_unid: 2, 
        N_unids: 900, 
        Fec_venta: ISODate("2020-06-11"),
        Prec_unid_emp: 1.80,
        Cliente: "Mercadona", 
        Vendedor: "TeDoySalud"
    },
    //#######################################################################################################
    {
        Prod: "Procesador Intel Core i7", 
        Depart: ["Tecnología"],
        Prec_unid: 369.90, 
        N_unids: 300, 
        Fec_venta: ISODate("2020-06-11"),
        Prec_unid_emp: 350,
        Cliente: "Hewlett-Packard", 
        Vendedor: "Intel Corporation"
    },
    {
        Prod: "Procesador Intel Core i7", 
        Depart: ["Tecnología"],
        Prec_unid: 369.90, 
        N_unids: 100, 
        Fec_venta: ISODate("2020-06-11"),
        Prec_unid_emp: 350,
        Cliente: "Amazon", 
        Vendedor: "Intel Corporation"
    }
])

