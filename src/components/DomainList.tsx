import { ChangeEvent, useState } from "react";
import domains from '../assets/domains.json';

function DomainList() {
    const [filteredDomains, setFilteredDomains] = useState(domains);
    const handleChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const inputValue = target.value.toLowerCase();

        const filteredList = domains.filter((domain) => {
            return domain.name.toLowerCase().indexOf(inputValue) != -1;
        });

        setFilteredDomains(filteredList);
    };

    return (
        <div className="container">
            <div className="form-floating mb-3">
                <input type="url" className="form-control" id="domainFilter" onChange={handleChange} placeholder="" />
                <label htmlFor="domainFilter">Filter by:</label>
            </div>

            <ul className="list-group mb-3">
                {filteredDomains.map((domain) => (
                    <li className="list-group-item" key={domain.name}>{domain.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DomainList;