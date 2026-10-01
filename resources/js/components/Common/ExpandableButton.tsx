import React, { useState } from 'react';

export default function ExpandableButton( ) {

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="btn btn-outline-primary border-0 rounded-pill p-3 fw-bold">Lihat Lebih Banyak <i className="bi bi-arrow-right"></i></div>
    </div>
  );
}