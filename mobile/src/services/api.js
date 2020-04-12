import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP  da máquina
 *
 * Adroid com Emuldador: para usar localhost é necessário
 * rodar adb reverse tcp:3000 tcp:3000
 * Adroid com Emuldador: 10.0.3.2 (Android Studio)
 *
 *
 */
