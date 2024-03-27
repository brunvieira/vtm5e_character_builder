import React from 'react';

interface PointProps {
  /**
   * Is this the principal call to action on the page?
   */
  selected?: boolean;

  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * What border color to use
   */
  borderColor?: string;

  /**
   * Click handler
   */
  onClick: () => void;
}

/**
 * Represents a point on attribute or skill
 */
export const Point = ({
  selected = false,
  backgroundColor = '#000',
  borderColor = '#000',
  ...props
}: PointProps) => {
  const { onClick } = props;
  const borderRadius = '50%';
  const size = '1rem';

  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius,
        borderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        width: size,
        height: size,
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: selected ? backgroundColor : 'transparent',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          borderRadius,
        }}
      />
    </div>
  );
};