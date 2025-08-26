import { apiService } from './api.js';

export const appointmentService = {
  createAppointment: async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/appointments/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

    // Get appointments (admin)
    async getAppointments() {
        try {
            const response = await apiService.get('/appointments');
            return response;
        } catch (error) {
            console.error('Error fetching appointments:', error);
            throw error;
        }
    },

    // Update appointment status
    async updateAppointmentStatus(id, status) {
        try {
            const response = await apiService.put(`/appointments/${id}/status`, { status });
            return response;
        } catch (error) {
            console.error('Error updating appointment status:', error);
            throw error;
        }
    }
};
