import React, { useEffect, useState } from 'react';

// styles
import './index.css';

const LayoutHeader = React.memo(() => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const onInputChange = (e: any) => {
    setIsDark(e.target.checked);
  };

  useEffect(() => {
    let classList = document.querySelector('body')?.classList;

    if (isDark) {
      classList?.remove('body-light');
      classList?.add('body-dark');
    } else {
      classList?.remove('body-dark');
      classList?.add('body-light');
    }
  }, [isDark]);

  return (
    <div className="header-section">
      <div className="logo"><span className="iconify" data-icon="mdi:lightbulb-outline"></span>Logo</div>
      <label className="l-mode" htmlFor="s-mode">
        <input
          id="s-mode"
          className="style-mode"
          type="checkbox"
          onChange={onInputChange}
        ></input>
        <span className='d-mode' ></span>
      </label>
    </div>
  );
});

export default LayoutHeader;
