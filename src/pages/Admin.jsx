import React, { useState, useEffect } from 'react';
import AdminComponent from '@components/Admin/'
const Admin = () => {
    const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {

    const email = prompt('Введите почту:');

    const password = prompt('Введите пароль:');

    // Проверка введенных данных

    if (email === 'namezsprod@mail.ru' && password === 'EBT-vdy-v3x-RA9') {

      setShowComponent(true);

    } else {

      setShowComponent(false);

    }

  }, []);
    return (
<>
        { showComponent ?
<AdminComponent/> : "Nothing here" }
        </>
        )
};

export default Admin;
