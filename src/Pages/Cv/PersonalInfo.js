import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <h1>Personal</h1>
            <input type="text" name="" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
    );
};

export default PersonalInfo;