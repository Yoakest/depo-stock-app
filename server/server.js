const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');  // Modellerimizi içeri aktaralım
const indexRoutes = require('./routes/indexRoutes');


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Veritabanı bağlantısını kontrol et
// sequelize.authenticate()
//   .then(() => console.log('Veritabanı başarıyla bağlandı!'))
//   .catch((err) => console.error('Veritabanı bağlantı hatası:', err));

// API uç noktalarını tanımlayacağız

app.use('/api', indexRoutes)


sequelize.sync({ alter: true }).then(() => {
  console.log('Veritabanı güncellendi!');
});
// Diğer model işlemleri de burada tanımlanacak
// Rol, Yetki, Ürün vb.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
