import React from 'react';

export default Dropdown = () => {
  return (
    <div>
			<label for="genre-select">
			<span>
				<select name="genre-select" id="genre-select">
					<option selected="" disabled="" hidden="" value="">Genre</option>
					<option value="value-0">Tangerine</option>
					<option value="value-1">Teal</option>
					<option value="value-2">Purple</option>
					<option value="value-3">Red</option>
					<option value="value-4">Blue</option>
					<option value="value-5">Green</option>
					<option value="value-6">Yellow</option>
					<option value="value-7">Orange</option>
				</select>

				<span class="material-symbols-outlined">arrow_drop_down</span>
			</span>
			</label>
    </div>
  )
};
