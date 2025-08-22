import { AlertTriangle, Check } from 'lucide-react';
import { Card, CardContent } from '~/components/ui/card';
import type { SkillRate } from '~/utils/roadmap';
import {
	calculateOverallPriority,
	getPriorityLabel,
	getRatingLabel
} from '~/utils/roadmap';

interface RatingsViewProps {
	techByRating: Record<string, SkillRate[]>;
}

export function RatingsView({ techByRating }: RatingsViewProps) {
	return (
		<div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-5">
			{Object.entries(techByRating)
				.sort((a, b) => Number(a[0]) - Number(b[0]))
				.map(([ratingKey, techs]) => {
					const rating = Number(ratingKey);

					const sortedTechs = [...techs].sort((a, b) => {
						const priorityA = calculateOverallPriority(a);
						const priorityB = calculateOverallPriority(b);
						return priorityA - priorityB;
					});

					return (
						<div
							key={ratingKey}
							className="min-h-[300px] flex-1 rounded-lg border-2 border-border p-4"
						>
							<h3 className="mb-4 text-center font-medium text-lg">
								{getRatingLabel(rating)}
							</h3>

							<div className="h-[600px] space-y-2 overflow-y-auto">
								{sortedTechs?.map((tech) => {
									const priority = tech.techDetails?.priority || 5;
									const priorityInfo = getPriorityLabel(priority);

									return (
										<Card
											key={tech.id}
											className={`tech-card ${tech.technology} ${
												rating >= 75 ? 'bg-muted/30' : ''
											}`}
										>
											<CardContent className="p-3">
												<div className="flex items-center justify-between">
													<div className="font-medium">{tech.technology}</div>
													{rating < 75 && (
														<div
															className={`flex items-center gap-1 ${priorityInfo.color}`}
														>
															<AlertTriangle className="h-3 w-3" />
															<span className="text-xs">
																{priorityInfo.label}
															</span>
														</div>
													)}
												</div>
												<div className="text-muted-foreground text-xs capitalize">
													{tech.techDetails?.category}
												</div>
												{rating >= 75 && (
													<div className="mt-1 flex items-center gap-1 text-green-400 text-xs">
														<Check className="h-3 w-3" />
														<span>Proficient</span>
													</div>
												)}
											</CardContent>
										</Card>
									);
								})}

								{sortedTechs?.length === 0 && (
									<div className="py-8 text-center text-muted-foreground text-sm">
										No technologies at this level
									</div>
								)}
							</div>
						</div>
					);
				})}
		</div>
	);
}
