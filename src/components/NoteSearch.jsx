import React from 'react';

function NoteSearch({ searchKeyword, onSearchChange }) {
  return (
    <div
      className="note-search"
      data-testid="note-search"
      style={{ position: 'relative' }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a8a29e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchKeyword}
        onChange={(e) => onSearchChange(e.target.value)}
        data-testid="note-search-input"
        style={{ paddingLeft: '38px' }}
      />
    </div>
  );
}

export default NoteSearch;
