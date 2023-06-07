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
        <>
            <h1>Domain List</h1>
            <div className="mb-3">
                <label htmlFor="domainFilter" className="form-label">Filter by:</label>
                <input type="email" className="form-control" id="domainFilter" onChange={handleChange} />
            </div>

            <ul className="list-group">
                {filteredDomains.map((domain) => (
                    <li className="list-group-item" key={domain.name}>{domain.name}</li>
                ))}
            </ul>
        </>
    );
}

export default DomainList;