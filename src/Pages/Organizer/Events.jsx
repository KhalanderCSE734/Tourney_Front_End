import React, { useState } from 'react';
import './CSS/Events.css';
import { IoAdd, IoSearchOutline, IoFilterOutline, IoEyeOutline, IoCreateOutline, IoTrashOutline, IoTrophyOutline, IoPeopleOutline } from 'react-icons/io5';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Mock events data based on the uploaded image
  const [events] = useState([
    { id: 1, name: 'U9 BS', eventType: 'singles', fee: 'INR 599', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 2, name: 'U9 GS', eventType: 'singles', fee: 'INR 699', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 3, name: 'U11 BS', eventType: 'singles', fee: 'INR 599', matchType: 'knockout', maxTeam: '-', allowBooking: 'Inactive' },
    { id: 4, name: 'U11 GS', eventType: 'singles', fee: 'INR 509', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 5, name: 'U13 BS', eventType: 'singles', fee: 'INR 495', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 6, name: 'U13 GS', eventType: 'singles', fee: 'INR 899', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 7, name: 'U15 BS', eventType: 'singles', fee: 'INR 999', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 8, name: 'U15 GS', eventType: 'singles', fee: 'INR 1099', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 9, name: 'U17 BS', eventType: 'singles', fee: 'INR 535', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
    { id: 10, name: 'U17 GS', eventType: 'singles', fee: 'INR 799', matchType: 'knockout', maxTeam: '-', allowBooking: 'Active' },
  ]);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.eventType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.allowBooking.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleCreateEvent = () => {
    console.log('Create new event');
  };

  const handleViewEvent = (eventId) => {
    console.log('View event:', eventId);
  };

  const handleEditEvent = (eventId) => {
    console.log('Edit event:', eventId);
  };

  const handleDeleteEvent = (eventId) => {
    console.log('Delete event:', eventId);
  };

  const getStatusBadgeClass = (status) => {
    return status.toLowerCase() === 'active' ? 'events-status-active' : 'events-status-inactive';
  };

  return (
    <div className="events-container">
      {/* Events Header */}
      <div className="events-header">
        <div className="events-title-section">
          <h2 className="events-main-title">Tournament Events</h2>
          <p className="events-subtitle">Manage all events for this tournament</p>
        </div>
        <button className="events-create-btn" onClick={handleCreateEvent}>
          <IoAdd className="events-create-icon" />
          Create New Event
        </button>
      </div>

      {/* Events Controls */}
      <div className="events-controls">
        <div className="events-search-wrapper">
          <IoSearchOutline className="events-search-icon" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="events-search-input"
          />
        </div>

        <div className="events-filters">
          <div className="events-filter-group">
            <IoFilterOutline className="events-filter-icon" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="events-filter-select"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="events-filter-group">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="events-filter-select"
            >
              <option value="name">Sort by Name</option>
              <option value="fee">Sort by Fee</option>
              <option value="status">Sort by Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events Table */}
      <div className="events-table-container">
        <div className="events-table-wrapper">
          <table className="events-table">
            <thead className="events-table-header">
              <tr>
                <th className="events-th events-th-sno">S.No</th>
                <th className="events-th events-th-name">Name</th>
                <th className="events-th events-th-type">Event Type</th>
                <th className="events-th events-th-fee">Fee</th>
                <th className="events-th events-th-match">Match Type</th>
                <th className="events-th events-th-team">Maximum Team</th>
                <th className="events-th events-th-booking">Allow Booking</th>
                <th className="events-th events-th-actions">Actions</th>
              </tr>
            </thead>
            <tbody className="events-table-body">
              {filteredEvents.map((event, index) => (
                <tr key={event.id} className="events-table-row">
                  <td className="events-td events-td-sno">{index + 1}</td>
                  <td className="events-td events-td-name">
                    <div className="events-name-cell">
                      <IoTrophyOutline className="events-name-icon" />
                      <span className="events-name-text">{event.name}</span>
                    </div>
                  </td>
                  <td className="events-td events-td-type">
                    <span className="events-type-badge">{event.eventType}</span>
                  </td>
                  <td className="events-td events-td-fee">
                    <span className="events-fee-text">{event.fee}</span>
                  </td>
                  <td className="events-td events-td-match">{event.matchType}</td>
                  <td className="events-td events-td-team">{event.maxTeam}</td>
                  <td className="events-td events-td-booking">
                    <span className={`events-status-badge ${getStatusBadgeClass(event.allowBooking)}`}>
                      {event.allowBooking}
                    </span>
                  </td>
                  <td className="events-td events-td-actions">
                    <div className="events-action-buttons">
                      <button 
                        className="events-action-btn events-view-btn"
                        onClick={() => handleViewEvent(event.id)}
                        title="View Event"
                      >
                        <IoEyeOutline />
                      </button>
                      <button 
                        className="events-action-btn events-edit-btn"
                        onClick={() => handleEditEvent(event.id)}
                        title="Edit Event"
                      >
                        <IoCreateOutline />
                      </button>
                      <button 
                        className="events-action-btn events-delete-btn"
                        onClick={() => handleDeleteEvent(event.id)}
                        title="Delete Event"
                      >
                        <IoTrashOutline />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Events Summary */}
      <div className="events-summary">
        <div className="events-summary-stats">
          <div className="events-stat-item">
            <span className="events-stat-label">Total Events:</span>
            <span className="events-stat-value">{events.length}</span>
          </div>
          <div className="events-stat-item">
            <span className="events-stat-label">Active Events:</span>
            <span className="events-stat-value events-stat-active">
              {events.filter(e => e.allowBooking === 'Active').length}
            </span>
          </div>
          <div className="events-stat-item">
            <span className="events-stat-label">Inactive Events:</span>
            <span className="events-stat-value events-stat-inactive">
              {events.filter(e => e.allowBooking === 'Inactive').length}
            </span>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="events-empty-state">
          <div className="events-empty-content">
            <IoTrophyOutline className="events-empty-icon" />
            <h3 className="events-empty-title">No events found</h3>
            <p className="events-empty-text">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Create your first event to get started'
              }
            </p>
            <button className="events-empty-btn" onClick={handleCreateEvent}>
              <IoAdd className="events-empty-btn-icon" />
              Create First Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
