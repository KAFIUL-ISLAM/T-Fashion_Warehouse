import React from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
    return (
        <div className="my-36 bg-fixed bg-center bg-cover bg-no-repeat h-[200px] text-white grid grid-cols-3 items-center justify-items-center text-center font-bold text-2xl" style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(https://media.istockphoto.com/photos/rows-of-shelves-picture-id1138429558?k=20&m=1138429558&s=612x612&w=0&h=SEojoXUHl6Di4plxrDgH28aY9J1yCTxFxH5uIlibDeo=)" }}>
            <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAABmJLR0QA/wD/AP+gvaeTAAAEuklEQVRoge2abWiWVRjHf5dbi2JWs43SlanVp6gUaYpOEDLyQy8YCsWYQcQyqCBaiBSFEPllhH2qMEgjjGwVSS+wCUGQH1SyoWL0YUtyqYitmsy5tuffh3Medz/37vt+nvt5W87+MM7znP99/ue67vNyXec8M1JC0gJgVtp2KZAxs18rpi5ps6qDzWnsqk3px1xfbgUuRPAtwGPAu0DU21wAbAI+Bw5E8NcArwf6KT8kbfdvqiGG7/B8awzf6vmOGL7B89vT2FXJuV01/O/EfwVpF3aheFlSe0T9zZXorNxO/AyMAo8kPDMKHC9np2V1wsy+x22TVcWMWBNXthOSmiTtlFRSdJU0z+s0FatRykgsA54EVpagAbDC6ywrVqAUJyxUTptOOXanRyUtAjLAHjM7ka+BXDq/AfcS7y7VgFKcOA0IaAvUXQW8WUDbNuCNwHd5vaJQtBNmdlDSPODagCGFHma2AbuZnEIjZnY6LjvOh0tOSKrBDW1NwvM3+XKxpL8j+DmSirGjQVIzcF22H0lLE56fAI6Y2UROraQtFTunVQZbsrYHp9ONvuwEhot5nRFYDDwLvAP8VCbN2UAXk/ZOQlKX97DooBOhuc5rriujZpPX7MrWXTlph6QlkhoT+Dsl3VY+s9Ih7xYrd7j5AOiXtNrMfg/xrcC3wJikNWZ2OEGrBngGN6+DGAF2mNmopCeA+SF+HPjQzM7mM3bKmpDULmk8sCP8IhcbsvwqScMB/pykJQE+Z01IaknYbR6UNFtSJoZ/0WsUviYkrcaNwICvGgAWAT2SZvnp8w1wERgCzuAi9j5JU3cOhzpfvgLc7v+eC3C1uAC4M8CvDbWdgqQ1MQR8Atzvv38HPA78YGYZ3DHza2ANcBYXrdcCPcBYjGY2Ep4zs34z6/dts1yWHw7wg74uE2do7Jowsz6gTVJtoK4b6Pafz3inkI/SZrYf2B+nyWRashJ4z39e5csB4C/gT2C5pBofkYN8OicqATMblNQNtPvpOIYbyX1mdgxA0tu4q8wfJfUDDwH9wFdxulV1wmMjLmN9Gpen7QBeCvBbceusE7gH+BJ4wcxG4wTzOmFm45J247bROHwKRCWEUXoXgOcl3Qc0mFlHiBewTdIdwFPAejMbT9IsaCTMrC0P/2ohOgCSHgBuAOYA9ZI2AOeBHjObkLQcuBVY6JuslzTq+ZEozVgn5C4ANgFXF2qgxx/AW1FvT9JC3O4VxB5fLpXUB/QC9QH+Y1+2Ax9FdZg0EiuA1wowOowx3/FvYcLMBiS1ANeHqPPAYTOT55tD/D8k7HpJW+xnPjqnvdEbMrOhBN2DSY3N7DgprzkT14SZnUojNl2YEal4raRO3G9t9/q69yVdLJN+dm53+uy0HMhuNA9Lmg8cMEkTXN4jksGntbum25JiIGmXJF3OI3AJM8IJk8ujTwHHptuYInAXMNckfYHLFsH9kl8HBC+Fb8EdVgapPppxJ72TgbpsCp+NYX05LST1ShoM1R2VdKiChsZC0iFJR0N1g5J6g3VREbteuf8g0kjum6g2GkP21Mc+CZNbVgT2VtbOWHv2xtiTExIs1KiWqXc+ACfNLO7wXzFIqsOtyTBOBG/E/wWPv8BhrMrVvAAAAABJRU5ErkJggg==" alt='...' className='mx-auto mb-2'/> <CountUp
                CountUp start={0} end={3615} delay={0}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
                <p>Packages</p>
            </div>
            <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEu0lEQVRoge2YXWhcRRTHz03Spolt7Sd+UI0kbe2DFLR+oBAqWiy2Kn2USJWK4GehoFUQUcFWoVUf9EFFRVQUqVCh2IcSMaAW24fWr9RqtVUT44q0aRNT0jWb/fkwZ9jr9s7M3btu9mX/EIbs/O5/zrn3zp0zI9JQQw01lFVAO9ADvAN8BZwACsBL9Y4tlYBW4HFgmGQVgK56x+kVsAg4EAv6MPAEcDOwFHhXf88DnwMbgWn1jvs/AhYAP2ugg8DaBKYT6AP+jCXbB8yoR8yJAj7UwPqBeSn4NcCQXvPqVMQYHzwCuoGXdQLngBHgXqAI/A10VOB3BXBG582LQC8wAIwCx4GltUiiC/jEMYGL2m7L4Pu6wxPgS+BOoPX/SuIy4KSa/wI8BiwHLtQ7arU8g/cNeu0fwFqgA7gYGIv5HgUurTaJOZjJC/ABMLOsf7X2nSHDFwiYr9efLPv9KmAzsD+WzDnVJLJFjfYD0x1MATid0T+K3fkoob8F2KP9D2cZwxoNqMkqD3NKmbYM/u32iXqYlcocqNTfGpyvBuNAi4frVW51hjG69dpvPEyLvrp5XxxNnnHsHR6Ooqjg4T7Tdo2HcekebXe5AB37uIhMF5G5Ls6XyIiIICLzAxN5pbZDHsalUW2vDnCztR3LMIYIpl4CuMnDjCoz08V4ru3Sawc8zLXK/ODz8j0REZGithd4mBFtFwa8kmRX7989TOhphQVM6N2Y7WFeUWY34Eu4/LpOzOoN8KSH67Df50rjj5v8qh7Xe5gFwLfKvVaB9y69ph9InMSYdWaTcsey5GCNnlOT08AiD7dMucMpfVswm68inmo5toYAbM2SgzWaAXyhRo94uIhSWX5NCt9blP06wD2j3F6q3bcAt6vZQcD5cQC2KtcHNHu4Zko1lLPs0JtoK4u7qkpCDdtihhs93BxKuz/nawA8q8wg0O7htimXA2ZVm4c17VHTfQFuvXI7PcxOZXoCXvap3Z8mxtA6YmUXrH8CnO3Pp2B8ZY+IiC0kTwQ4EUmfiN0LOKtUld3N+RK2SYYm77i2qSqGYCKYxXCT/psL4HYn50vY9oX25N9ru5lq9u/AucCjmG0omLVksYNtAh6iVAk4K2HMlhZlH3R9CYF5wG/K5oE3gWWVJHAJ5lRjhJKOAlcmsG3ABv00WwUPIYAXYvxB9ThrY4bZE30cYycxFUG3z7wNeF6zt/oJeICybS6mTtqOOdO1Ggp9ico87qC0iKJe24HOBPY6zNnZRIz/CDivHFxYdlf3YA7Rmsq4JZiD6UKM3Yf57FZ8bIM5K16vHlYF4G1gSQJ/kT5Ne3oziH3dMSvtXu3IkbBlxcyBp2J3JA+8BayoNHhPUivU074REzrmWXMIWAwcUu4Q0BpfxHKOu9AM7FCmCLxBBSeKGRLqwExse/C3g4SSB1N1H1Pmvvjhwd0O46e1/xSwrlYJJIy7jtIJzRYHs0H7+yLgLzG7u35JXpEvF5FIRFZFUfRp7UJPDPRGEenV8X0aFuA7wnpvCuJOFPB+ivh2CzANmOv4szvEW+uYyG0awxEf53xkmAVqTNLXY7XWpIjMiqJoPKnTF+SkiPxYk5Cy6YiEK+aGGmqooYamVv8C9v8SJgR7L/IAAAAASUVORK5CYII=" alt='...' className='mx-auto mb-2'/> <CountUp
                CountUp start={0} end={240} delay={0}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
                <p>Workers</p>
            </div>
            <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADJklEQVR4nO2aO2sUURSAz00ithIFNSYkIkYrH40vsLASQbCwVCzUwkZQEKzsFS2t8gPEBFGLIEY0FtF0FhIsRERBRXxsYmJ8Ju5n4VmMk9mZ2WTuY+V+zWXnnLnnseeee2d2RSKRSCQSifgC2APcAT4D08AQsNu3X04AjgFV5jMLHPbtn1WAbuCbBnwB6ABWAhf12hdgtW8/rQGc1UBvpsgGVXbKth8ttg1ksFbH4RTZdR2323bCZwJ+6TiTInus4ybbToSQgLYU2RMRmRWRXmCJTSd8JmCFjhNJgTHmu4h8kD/JabfphM8E7NTxaR35uI7LbTrhJQFAj4j0iMhXERmro1bVMW2JlIavCqgdcoa03P8BMPJ3l3jhzCsXAO3AhO7ze+vodKv8nWv/rANc1uBG9ZtO0zmjOldd+2cV4IgG9gPYWkenBRhTvf2ufbQGcAiY0cBOZOgdV51Xts8AzgBOz3nqO5ehtwqoqN5Blz7mAjxMeWydy0jKPQY4r/Jq1sMN0AbcV91Bu9EsgJzgAUjotwJ9KpoBjubMf0l13wIddqNZAGlB1pMBS4Frenka2Jcz9wGtkJ+E+jaoaAKAZcCIXqoAu3Lm7QU+qf5JG76XQpEEJHgJbCww76MCq6sIU8ANYEP50UvDCRgF1hScd7ikBNQYB7rKjV4a6wE+ADqBW+rKgA0DQSdA/ehSVyaL3uPzfYBNCn8Z/00CdN336cchGwacLQHyT51ZfAQ6i9oKtQKq+SrzmBKRARHZYox5XbI/4TXBRNfvd2EwqASo3VrXH8/XTifUJdAoqW+WitC0CUh0/bSf10o3GOouUAHWL9RWqBVQdBe4JyLbjDHPbDojIuE0QWyf+TMMB5EAtbfo7l8j1CVQlEUnvekSkOj+d10aDm0XeA+sW6ytUCsgaxeYEJErIrLDGPPckT9+m2Ci8/v5vdD3LjCn81fKnDfUJZBFa5mTNUUCEp3/dplzF36KqpW4MWbePQ4PQRUR2WyMeVPWhE1RASIyKSL9UnLwIiX/ASmtOkKnWSrAGg1XgMuHHhc0UgEPcuTz/iARiUQikUgkaH4DlmbLc9ukewcAAAAASUVORK5CYII=" alt="..." className='mx-auto mb-2'/> <CountUp
                CountUp start={0} end={16} delay={0}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
                <p>Years of service</p>
            </div>
        </div>
    );
};

export default CounterSection;