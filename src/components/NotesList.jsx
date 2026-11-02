import React from 'react';
import NoteItem from './NoteItem';

function NotesList({
  notes,
  onDelete,
  onArchive,
  searchKeyword,
  dataTestId = 'notes-list',
}) {
  const hasNotes = notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan
        </p>
      </div>
    );
  }

  const groupedNotes = notes.reduce((acc, note) => {
    const groupKey = new Date(note.createdAt).toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric',
    });
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(note);
    return acc;
  }, {});

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {Object.entries(groupedNotes).map(([groupKey, groupNotes]) => (
        <section
          key={groupKey}
          data-testid={`${groupKey}-group`}
          className="notes-group"
        >
          <div className="notes-group__header">
            <h3
              className="notes-group__title"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {groupKey}
            </h3>
            <span
              className="notes-group__count"
              data-testid={`${groupKey}-group-count`}
            >
              {groupNotes.length} catatan
            </span>
          </div>
          <div className="notes-group__items">
            {groupNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                searchKeyword={searchKeyword}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default NotesList;
